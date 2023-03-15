import { createContext, useContext } from 'react';

export type Task = {
  id: string;
  name: string;
  completed: boolean;
};

export type TaskDataValue = {
  loading: boolean;
  tasks: Task[];
  toggleTask: (id: string) => void;
  addTask: (name: string) => void;
};

export const TaskDataContext = createContext<TaskDataValue | undefined>(
  undefined
);

export const useTaskData = () => {
  const ctx = useContext(TaskDataContext);

  if (!ctx) {
    throw new Error('Component beyond TaskDataContext');
  }

  return ctx;
};
