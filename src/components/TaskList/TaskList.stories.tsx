import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TaskList } from './TaskList';

export default {
  title: 'Componentes/TaskList',
} as ComponentMeta<typeof TaskList>;

export const Base = () => {
  const tasks = [
    {
      id: '1',
      completed: false,
      name: 'Example task',
    },
    {
      id: '2',
      completed: true,
      name: 'Example task',
    },
    {
      id: '3',
      completed: false,
      name: 'Example task',
    },
  ];

  return <TaskList />;
};
