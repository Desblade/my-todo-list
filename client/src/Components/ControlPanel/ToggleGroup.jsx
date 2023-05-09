import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

const ToggleGroup = ({ alignment, handleAlignment, handleGetTodos }) => {
  return (
    <ToggleButtonGroup
      exclusive
      value={alignment}
      onChange={handleAlignment}
    >
      <ToggleButton onClick={handleGetTodos} value="all">
        Все
      </ToggleButton>
      <ToggleButton onClick={() => { handleGetTodos('1d'); }} value="1d">
        На сегодня
      </ToggleButton>
      <ToggleButton onClick={() => { handleGetTodos('7d'); }} value="7d">
        На неделю
      </ToggleButton>
      <ToggleButton onClick={() => { handleGetTodos('future'); }} value="future">
        На будущее
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export {
  ToggleGroup,
};
