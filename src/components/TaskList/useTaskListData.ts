import { createContext, useContext } from 'react';

export type TaskListDataValue = {
  name: string;
  set: (name: string) => void;
};

export const TaskListDataContext = createContext<TaskListDataValue | undefined>(
  undefined
);

export const useTaskListData = () => {
  const ctx = useContext(TaskListDataContext);

  if (!ctx) {
    throw new Error('Component beyond TaskListDataContext');
  }

  return ctx;
};
