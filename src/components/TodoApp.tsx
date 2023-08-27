// TodoApp.tsx
import React from 'react';
import { Provider } from 'urql';
import TodoList from './TodoList';
import client from '../graphql/client';
import { gql } from '@urql/core';

const TodoApp: React.FC = () => {
  return (
    <Provider value={client}>
      <div>
        <TodoList />
      </div>
    </Provider>
  );
};

export default TodoApp;
