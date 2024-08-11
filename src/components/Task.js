import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../actions';

const Task = ({ task }) => {
  const [editMode, setEditMode] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (editMode) {
      dispatch(editTask({ ...task, description: newDescription }));
    }
    setEditMode(!editMode);
  };

  return (
    <li>
      {editMode ? (
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      ) : (
        <span>{task.description}</span>
      )}
      <button onClick={() => dispatch(toggleTask(task.id))}>
        {task.isDone ? 'Undo' : 'Done'}
      </button>
      <button onClick={handleEdit}>
        {editMode ? 'Save' : 'Edit'}
      </button>
    </li>
  );
};

export default Task;
