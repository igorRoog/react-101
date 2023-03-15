import { Box } from '@mui/material';
import { Title } from '../Title';
import { DummyComponent4 } from './DummyComponent4';

export const DummyComponent3 = () => {
  return (
    <Box
      sx={{
        border: '1px solid green',
        p: 1,
      }}
    >
      <Title>Dummy Component 3</Title>
      <DummyComponent4 />
    </Box>
  );
};
