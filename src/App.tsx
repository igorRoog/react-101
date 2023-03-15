import './App.css';
import { AddTask } from './components/AddTask/AddTask';
import { TaskList } from './components/TaskList/TaskList';
import Container from '@mui/material/Container';
import {
  Box,
  CssBaseline,
  Grid,
  Paper,
  styled,
  Typography,
} from '@mui/material';
import { Title } from './components/Title';
import { DummyComponent1 } from './components/DummyComponents/DummyComponent1';
import { DummyComponent5 } from './components/DummyComponents/DummyComponent5';
import { TaskDataProvider } from './contexts/TaskDataProvider';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export const App = () => {
  return (
    <TaskDataProvider>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#dbdbdb', height: '100vh', p: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box sx={{ m: 2, textAlign: 'center' }}>
                <Typography variant="h4">
                  THM React - Meeting 17/03/2023
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <Title>First 3 tasks</Title>
                <TaskList limit={3} />
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <Title>Add task</Title>
                <AddTask />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <DummyComponent1 />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <DummyComponent5 />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </TaskDataProvider>
  );
};
