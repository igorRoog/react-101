import { Box, Typography } from '@mui/material';
import { TaskItem } from '../TaskItem/TaskItem';
import { useTaskData } from '../../contexts/useTaskData';
import { TaskListDataProvider } from './TaskListDataProvider';
import { ChildComponent1 } from './ChildComponent1';
import { useTaskListData } from './useTaskListData';
import { useEffect } from 'react';
import { v4 } from 'uuid';

export type TaskListProps = {
  limit?: number;
};

export const TaskList = (props: TaskListProps) => {
  return (
    <TaskListDataProvider>
      <TaskListInner {...props} />
    </TaskListDataProvider>
  );
};

export const TaskListInner = ({ limit }: TaskListProps) => {
  const { set } = useTaskListData();
  const { tasks, toggleTask } = useTaskData();

  const tasksToDisplay = limit != null ? tasks.slice(0, limit) : tasks;

  useEffect(() => {
    set(v4());
  }, []);

  return (
    <>
      <ChildComponent1 />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 1,
        }}
      >
        {tasksToDisplay.length > 0 ? (
          tasksToDisplay.map((t) => (
            <TaskItem key={t.id} task={t} toggleTask={toggleTask} />
          ))
        ) : (
          <Typography component="h1" variant="body1">
            No more tasks for today!
          </Typography>
        )}
      </Box>
    </>
  );
};
