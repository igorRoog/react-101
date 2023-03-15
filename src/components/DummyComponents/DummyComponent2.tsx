import { Box } from '@mui/material';
import { Title } from '../Title';
import { DummyComponent3 } from './DummyComponent3';

export const DummyComponent2 = () => {
  return (
    <Box
      sx={{
        border: '1px solid blue',
        p: 1,
      }}
    >
      <Title>Dummy Component 2</Title>
      <DummyComponent3 />
    </Box>
  );
};
