// src/components/ToDoItem.js
import React from 'react';
import { ListItem, ListItemText, IconButton, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

const ToDoItem = ({ task, onDelete, onEdit, onSave, isEditing, setEditing, currentValue, setCurrentValue }) => {
  return (
    <ListItem>
      {isEditing ? (
        <TextField
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
          fullWidth
        />
      ) : (
        <ListItemText primary={task} />
      )}
      <IconButton edge="end" aria-label="edit" onClick={() => (isEditing ? onSave() : setEditing(true))}>
        {isEditing ? <SaveIcon /> : <EditIcon />}
      </IconButton>
      <IconButton edge="end" aria-label="delete" onClick={onDelete}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default ToDoItem;
