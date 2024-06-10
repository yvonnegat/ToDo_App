// src/components/ToDoList.js
import React, { useState } from 'react';
import { List } from '@mui/material';
import ToDoItem from '../components/TodoItem';

const ToDoList = ({ tasks, deleteTask, editTask }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [currentValue, setCurrentValue] = useState('');

  return (
    <List>
      {tasks.map((task, index) => (
        <ToDoItem
          key={index}
          task={task}
          onDelete={() => deleteTask(index)}
          onEdit={() => {
            setEditingIndex(index);
            setCurrentValue(task);
          }}
          onSave={() => {
            editTask(index, currentValue);
            setEditingIndex(null);
          }}
          isEditing={editingIndex === index}
          setEditing={() => setEditingIndex(index)}
          currentValue={currentValue}
          setCurrentValue={setCurrentValue}
        />
      ))}
    </List>
  );
};

export default ToDoList;
