import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useRef } from 'react';
import { useTaskData } from '../../contexts/useTaskData';

export const AddTask = () => {
  const { addTask } = useTaskData();
  const nameRef = useRef<HTMLInputElement>(null);

  const handleAdd = () => {
    if (!nameRef.current || nameRef.current.value === '') {
      return;
    }

    addTask(nameRef.current.value);
    nameRef.current.value = '';
  };

  return (
    <Box
      sx={{
        p: 1,
        display: 'flex',
      }}
    >
      <TextField
        id="outlined-basic"
        variant="standard"
        placeholder="Task name"
        sx={{
          width: '100%',
          mr: 2,
        }}
        inputRef={nameRef}
      />
      <Button variant="contained" onClick={handleAdd}>
        Add
      </Button>
    </Box>
  );
};
