// DeleteTodo.tsx
import React from 'react';
import { useMutation } from 'urql';

const DELETE_TODO = `
  mutation DeleteTodo($id: uuid!) {
    delete_todo_by_pk(id: $id) {
      id
    }
  }
`;

const DeleteTodo: React.FC<{ id: string }> = ({ id }) => {
  const [, deleteTodo] = useMutation(DELETE_TODO);

  const handleDelete = async () => {
    await deleteTodo({ id });
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteTodo;
