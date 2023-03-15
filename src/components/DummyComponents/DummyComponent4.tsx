import { Box } from '@mui/material';
import { TaskList } from '../TaskList/TaskList';
import { Title } from '../Title';

export const DummyComponent4 = () => {
  return (
    <Box
      sx={{
        border: '1px solid orange',
        p: 1,
      }}
    >
      <Title>Dummy Component 4</Title>
      <TaskList />
    </Box>
  );
};
