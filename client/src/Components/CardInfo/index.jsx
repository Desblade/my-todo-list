import {
  Box, Container, Typography,
} from '@mui/material';
import React, {useContext} from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import styles from './index.module.css';

const CardInfo = observer(({
  title,
  description,
  newDate,
  priority,
  status,
  isVisibleResponsible,
  responsibleId,
  children,
}) => {
  const rootClasses = [];
  const { user } = useContext(Context);

  const subordinate = user.responsible?.find(({ id }) => id === responsibleId);

  const rowDate = new Date(newDate);

  if (rowDate < Date.now()) {
    rootClasses.push(styles.overdue);
  } else if (status === 'Выполнена') {
    rootClasses.push(styles.fulfilled);
  } else {
    rootClasses.push(styles.default);
  }

  return (
    <Container className={styles.container} variant="outlined">
      <Typography className={rootClasses.join(' ')} variant="h3">{ title }</Typography>
      <Typography className={styles.description}>{ description }</Typography>
      <Box className={styles.box}>
        <Typography className={styles.text}>
          {' '}
          <Typography className={styles.fab}>Сроки: </Typography>
          { newDate }
        </Typography>
        <Typography className={styles.text}>
          {' '}
          <Typography className={styles.fab}>Статус: </Typography>
          {' '}
          { status }
        </Typography>
        <Typography className={styles.text}>
          {' '}
          <Typography className={styles.fab}>Приоритет: </Typography>
          { priority }
        </Typography>
        {isVisibleResponsible && responsibleId
          && (
            <Typography className={styles.text}>
              {' '}
              <Typography className={styles.fab}>Ответственный:</Typography>
              { subordinate?.name }
              {' '}
              { subordinate?.surname }
            </Typography>
          )}
      </Box>
      { children }
    </Container>
  );
});

export  {
  CardInfo,
};
