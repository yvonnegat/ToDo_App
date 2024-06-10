// src/App.js
import React from 'react';
import { useState } from 'react';
import ToDoList from './components/TodoList';
import ToDoForm from './components/TodoForm';
import { Container, Typography, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const editTask = (index, newValue) => {
    const newTasks = tasks.map((task, i) => (i === index ? newValue : task));
    setTasks(newTasks);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h3" component="h1" align="center">
          ToDolist App
        </Typography>
        <ToDoForm addTask={addTask} />
        <ToDoList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
