// EditTodo.tsx
import React, { useState } from 'react';
import { useMutation } from 'urql';

const UPDATE_TODO = `
  mutation UpdateTodo($id: uuid!, $completed: Boolean!) {
    update_todo_by_pk(pk_columns: { id: $id }, _set: { completed: $completed }) {
      id
      completed
    }
  }
`;

const EditTodo: React.FC<{ id: string; completed: boolean }> = ({ id, completed }) => {
  const [isCompleted, setIsCompleted] = useState(completed);
  const [, updateTodo] = useMutation(UPDATE_TODO);

  const handleCheckboxChange = async () => {
    const newCompleted = !isCompleted;
    setIsCompleted(newCompleted);
    await updateTodo({ id, completed: newCompleted });
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={handleCheckboxChange}
      />
      Completed
    </label>
  );
};

export default EditTodo;
