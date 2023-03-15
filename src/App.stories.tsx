import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { expect } from '@storybook/jest';

import { App } from './App';
import { within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export default {
  title: 'Componentes/App',
} as ComponentMeta<typeof App>;

export const Base = () => {
  return <App />;
};

Base.play = ({ canvasElement }: { canvasElement: any }) => {
  const canvas = within(canvasElement);

  // Task visible
  const task1 = canvas.getByText('Task1');
  expect(task1).toBeInTheDocument();

  // Task can be marked as completed
  const label = task1.closest('label') as HTMLLabelElement;
  const task1Checkbox = within(label).getByRole('checkbox');
  userEvent.click(task1Checkbox);

  // Task can be added to the list
  const taskInput = canvas.getByPlaceholderText('Task name');
  userEvent.type(taskInput, 'Task3');
  const addButton = canvas.getByText('Add');
  userEvent.click(addButton);

  expect(taskInput).toHaveValue('');

  // Clearing list
  expect(
    canvas.queryByText('No more tasks for today!')
  ).not.toBeInTheDocument();

  const clearListButton = canvas.getByText('Clear task list');
  expect(clearListButton).toBeInTheDocument();

  userEvent.click(clearListButton);
  expect(clearListButton).not.toBeInTheDocument();

  expect(canvas.queryByText('No more tasks for today!')).toBeInTheDocument();
};
