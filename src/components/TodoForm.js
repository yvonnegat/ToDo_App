// src/components/ToDoForm.js
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const ToDoForm = ({ addTask }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTask(input);
      setInput('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, mt: 2 }}>
      <TextField
        fullWidth
        label="New Task"
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button variant="contained" type="submit">
        Add
      </Button>
    </Box>
  );
};

export default ToDoForm;
