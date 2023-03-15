import React from 'react';
import { fireEvent, render, within } from '@testing-library/react';
import * as useTaskDataModule from '../../contexts/useTaskData';
import { AddTask } from './AddTask';

test('calls addTask function when name is provided', () => {
  const addTask = jest.fn();
  jest.spyOn(useTaskDataModule, 'useTaskData').mockImplementation(() => ({
    loading: false,
    tasks: [],
    addTask: addTask,
    toggleTask: jest.fn(),
  }));

  const { container } = render(<AddTask />);
  const visibleContainer = within(container);

  const taskInput = visibleContainer.getByPlaceholderText('Task name');
  fireEvent.change(taskInput, { target: { value: 'New Task' } });

  const addButton = visibleContainer.getByRole('button');
  fireEvent.click(addButton);

  expect(addTask).toHaveBeenCalled();
  expect(addTask.mock.calls[0][0]).toBe('New Task');
});

test('doesn`t call addTask function when name is not provided', () => {
  const addTask = jest.fn();
  jest.spyOn(useTaskDataModule, 'useTaskData').mockImplementation(() => ({
    loading: false,
    tasks: [],
    addTask: addTask,
    toggleTask: jest.fn(),
  }));

  const { container } = render(<AddTask />);
  const visibleContainer = within(container);

  const addButton = visibleContainer.getByRole('button');
  fireEvent.click(addButton);

  expect(addTask).not.toHaveBeenCalled();
});
