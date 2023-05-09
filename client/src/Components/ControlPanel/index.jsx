import React from 'react';
import {
  Button, Card, Container, FormControlLabel, Switch, ToggleButton, ToggleButtonGroup,
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import { ToggleGroup } from './ToggleGroup';
import styles from './index.module.css';

const ControlPanel = observer(({
  alignment,
  handleAlignment,
  handleGetTodos,
  isVisibleResponsible,
  setIsVisible,
  setIsVisibleResponsible,
  user,
}) => (
  <Card className={styles.card} variant="outlined">
    <Container sx={{ display: 'flex', flexDirection: 'column' }}>
     <ToggleGroup
       alignment={alignment}
       handleAlignment={handleAlignment}
       handleGetTodos={handleGetTodos}
     />
    </Container>
    <Container className={styles.container}>
      {user.user.roles === 'manager'
        && (
        <FormControlLabel
          control={(
            <Switch
              checked={isVisibleResponsible}
              onChange={(event) => { setIsVisibleResponsible(event.target.checked); }}
            />
        )}
          label="Показать ответственных"
        />
        )}
      <Button
        onClick={() => setIsVisible(true)}
        variant="contained"
      >
        Создать задачу
      </Button>
    </Container>
  </Card>
));

export {
  ControlPanel,
};
