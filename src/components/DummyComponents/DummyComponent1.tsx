import { Box } from '@mui/system';
import { Title } from '../Title';
import { DummyComponent2 } from './DummyComponent2';

export const DummyComponent1 = () => {
  return (
    <Box
      sx={{
        border: '1px solid red',
        p: 1,
      }}
    >
      <Title>Dummy Component 1</Title>
      <DummyComponent2 />
    </Box>
  );
};
