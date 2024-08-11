import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { filterTasks } from '../actions';

const ListTask = () => {
  const { tasks, filter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.isDone;
    if (filter === 'not_done') return !task.isDone;
    return true;
  });

  return (
    <div>
      <button onClick={() => dispatch(filterTasks('all'))}>All</button>
      <button onClick={() => dispatch(filterTasks('done'))}>Done</button>
      <button onClick={() => dispatch(filterTasks('not_done'))}>Not Done</button>
      <ul>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
