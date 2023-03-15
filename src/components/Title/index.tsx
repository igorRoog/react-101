import { Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

export const Title: React.FC<PropsWithChildren<unknown>> = (props) => (
  <Typography
    variant="body1"
    sx={{
      p: 1,
      pb: 0,
    }}
  >
    {props.children}
  </Typography>
);
