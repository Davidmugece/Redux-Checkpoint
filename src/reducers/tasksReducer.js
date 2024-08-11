const initialState = {
    tasks: [],
    filter: 'all',
  };
  
  const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return { ...state, tasks: [...state.tasks, action.payload] };
      case 'EDIT_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload.id ? action.payload : task
          ),
        };
      case 'FILTER_TASKS':
        return { ...state, filter: action.payload };
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload ? { ...task, isDone: !task.isDone } : task
          ),
        };
      default:
        return state;
    }
  };
  
  export default tasksReducer;
  