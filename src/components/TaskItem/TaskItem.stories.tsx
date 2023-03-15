import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TaskItem, TaskItemProps } from './TaskItem';

export default {
  title: 'Componentes/TaskItem',
} as ComponentMeta<typeof TaskItem>;

const Template: ComponentStory<typeof TaskItem> = ({ task, ...rest }) => {
  return <TaskItem task={task} {...rest} />;
};
export const ExampleStory = Template.bind({});
ExampleStory.args = {
  task: {
    id: '1',
    completed: false,
    name: 'Example task',
  },
  toggleTask: () => {},
};
