export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: task,
  });
  
  export const editTask = (task) => ({
    type: 'EDIT_TASK',
    payload: task,
  });
  
  export const filterTasks = (filter) => ({
    type: 'FILTER_TASKS',
    payload: filter,
  });
  
  export const toggleTask = (id) => ({
    type: 'TOGGLE_TASK',
    payload: id,
  });
  