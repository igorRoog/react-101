import { useState } from 'react';
import { TaskListDataContext } from './useTaskListData';

export const TaskListDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [name, setName] = useState<string>('');

  const set = (val: string) => {
    setName(val);
  };

  return (
    <TaskListDataContext.Provider value={{ name, set }}>
      {children}
    </TaskListDataContext.Provider>
  );
};
