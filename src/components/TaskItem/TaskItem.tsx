import React from 'react';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';

import Checkbox from '@mui/material/Checkbox';
import { Task } from '../../contexts/useTaskData';

export type TaskItemProps = {
  task: Task;
  toggleTask: (id: string) => void;
};

export const TaskItem = ({ task, toggleTask }: TaskItemProps) => {
  return (
    <Box>
      <FormControlLabel
        control={
          <Checkbox
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
        }
        label={task.name}
      />
    </Box>
  );
};
