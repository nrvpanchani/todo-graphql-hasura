// AddTodo.tsx
import React, { useState } from 'react';
import { ADD_TODO } from '../graphql/api';
import client from '../graphql/client';

const AddTodo: React.FC = () => {
  const [task, setTask] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim() !== '') {
      await client.mutation(ADD_TODO, {
        task: task
      }).subscribe(result => {
        console.log(result, "====result");
    });
      setTask('');
    }
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
