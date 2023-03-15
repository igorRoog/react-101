import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useTaskData } from '../../contexts/useTaskData';
import { Title } from '../Title';

export const DummyComponent5 = () => {
  const { tasks } = useTaskData();

  return (
    <Box>
      <Title>Summary</Title>
      <Typography variant="body2" sx={{ p: 1 }}>
        There are {tasks.length} tasks in total!
      </Typography>
    </Box>
  );
};
