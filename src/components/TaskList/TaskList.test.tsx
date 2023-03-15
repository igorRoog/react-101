import React from 'react';
import { render, within } from '@testing-library/react';
import { TaskList } from './TaskList';
import * as useTaskDataModule from '../../contexts/useTaskData';

test('renders list with tasks', () => {
  jest.spyOn(useTaskDataModule, 'useTaskData').mockImplementation(() => ({
    loading: false,
    tasks: [
      { id: '1', name: 'Example task 1', completed: false },
      { id: '2', name: 'Example task 2', completed: false },
      { id: '3', name: 'Example task 3', completed: false },
    ],
    addTask: jest.fn(),
    toggleTask: jest.fn(),
  }));

  const { container } = render(<TaskList />);
  const visibleContainer = within(container);

  const visibleTasks = visibleContainer.getAllByText('Example', {
    exact: false,
  });
  expect(visibleTasks).toHaveLength(3);
});

test('renders message when no tasks', () => {
  jest.spyOn(useTaskDataModule, 'useTaskData').mockImplementation(() => ({
    loading: false,
    tasks: [],
    addTask: jest.fn(),
    toggleTask: jest.fn(),
  }));
  const { container } = render(<TaskList />);
  const visibleContainer = within(container);

  const message = visibleContainer.getByText('No more tasks for today!');
  expect(message).toBeInTheDocument();
});
