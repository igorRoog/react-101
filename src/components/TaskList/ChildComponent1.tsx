import { Typography } from '@mui/material';
import { useTaskListData } from './useTaskListData';

export const ChildComponent1 = () => {
  const { name } = useTaskListData();

  return <Typography variant="body1">{name}</Typography>;
};
