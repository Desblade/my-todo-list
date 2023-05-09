import React, {
  useContext, useRef, useState,
} from 'react';
import {
  Box, Button, Card, Modal,
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import { Context } from '../../../index';
import { InputValues } from '../../InputValues';
import { SelectStatus } from '../../SelectStatus';
import { ResponsibleValue } from '../../ResponsibleValue';
import { RadioComponent } from '../../RadioComponent';
import { toast } from 'react-toastify';
import styles from './index.module.css';

const ModalForCreateTodo = observer(({
  handlerForModalCreate,
  isVisible,
  isVisibleUpdate,
  setIsVisible,
  labelForButton,
  handlerForUpdateTodo,
  id,
}) => {
  const { user } = useContext(Context);
  const [showResponsible, setShowResponsible] = useState(false);
  const [radios, setRadios] = useState({ priority: '', status: '' });
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const endtimeRef = useRef(null);
  const responsibleId = user.subordinate.id;

  const switchHandler = (event) => {
    const { checked } = event.target;

    setShowResponsible(checked);
  };

  const radioGroupHandler = (value) => {
    setRadios({ ...radios, priority: value });
  };

  const selectHandler = (event) => {
    setRadios({ ...radios, status: event.target.value });
  };

  const responsibleHandler = (event) => {
    user.setSubordinate(event.target.value);
  };

  const updateTodoHandler = async (id) => {
    try {
      await handlerForUpdateTodo(
        id,
        {
          title: titleRef.current?.value,
          descriptionRef: descriptionRef.current?.value,
          endtimeRef: endtimeRef.current?.value,
          priority: radios.priority,
          status: radios.status,
          responsibleId
        }
      );
    } catch (e) {
      return toast(e.error);
    }
  };

  const createTodoHandler = async () => {
    try {
      if (!responsibleId) {
        user.setSubordinate({});
      }

      await handlerForModalCreate({
        title: titleRef.current?.value,
        description: descriptionRef.current?.value,
        endtime: endtimeRef.current?.value,
        priority: radios.priority,
        status: radios.status,
        responsibleId,
      });
    } catch (e) {
      return toast(e.error);
    }

    setRadios({
    ...radios, status: '', priority: ''
    });
    setShowResponsible(false);
  };

  return (
    <Modal open={isVisible || isVisibleUpdate}>
      <Box
        className={styles.box}
        onClick={() => setIsVisible(false)}
      >
        <Card
          className={styles.card}
          onClick={(event) => { event.stopPropagation(); }}
        >
          <InputValues
            titleRef={titleRef}
            descriptionRef={descriptionRef}
            endtimeRef={endtimeRef}
          />
          <Box className={styles.box}>
            <RadioComponent
              radioGroupHandler={radioGroupHandler}
            />
            <SelectStatus
              radios={radios}
              selectHandler={selectHandler}
            />
            { user.user.roles === 'manager'
              && (
              <ResponsibleValue
                responsibleHandler={responsibleHandler}
                showResponsible={showResponsible}
                switchHandler={switchHandler}
              />
              )}
          </Box>
          {isVisible
            ? (
              <Button
                onClick={createTodoHandler}
                sx={{ mt: 4 }}
                fullWidth
              >
                {labelForButton}
              </Button>
            )
            : (
              <Button
                onClick={() => updateTodoHandler(id)}
                sx={{ mt: 4 }}
                fullWidth
              >
                {labelForButton}
              </Button>
            )}
        </Card>
      </Box>
    </Modal>
  );
});

export {
  ModalForCreateTodo,
};
