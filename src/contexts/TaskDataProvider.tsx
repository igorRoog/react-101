import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { Task, TaskDataContext } from './useTaskData';

export const TaskDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState<Task[]>([]);

  const toggleTask = (id: string) => {
    const taskToUpdate = tasks.find((t) => t.id === id);
    if (!taskToUpdate) {
      return;
    }
    taskToUpdate.completed = !taskToUpdate.completed;
    const updatedTasksList = [...tasks];
    setTasks(updatedTasksList.map((t) => (t.id === id ? taskToUpdate : t)));
  };

  const addTask = (name: string) => {
    setTasks((currTasks) => [
      ...currTasks,
      {
        id: v4(),
        name,
        completed: false,
      },
    ]);
  };

  useEffect(() => {
    const fatchData = async () => {
      const result = await fetch('http://localhost:3005/tasks/4000');
      const tasks = await result.json();
      setTasks(tasks);
    };

    fatchData().finally(() => {
      setLoading(false);
    });
  }, []);

  return (
    <TaskDataContext.Provider value={{ tasks, loading, toggleTask, addTask }}>
      {children}
    </TaskDataContext.Provider>
  );
};
