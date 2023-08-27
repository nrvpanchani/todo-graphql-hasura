import React, { useEffect, useState } from 'react';
import client from '../graphql/client';
import Switch from "react-switch";
import AddTodo from './AddTodo';
import { GET_TODOS, UPDATE_TODO, DELETE_TODO } from '../graphql/api';

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState([]) 
    useEffect(() => {
        client.query(GET_TODOS, {}).subscribe(result => {
            const { data: { todo } } = result
            setTodos(todo)
        });
    }, [])

  return (
    <div>
      <h2>Todos</h2>
      <AddTodo />
      <table>
        <thead>
            <tr>
                <th>Task</th>
                <th>Status</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {todos?.length > 0 && todos.map((todo: any) => (
                <tr key={todo.id}>
                    <td>{todo.task}</td>
                    <td>
                        <Switch 
                            onChange={async(status) => {
                                await client.mutation(UPDATE_TODO, {
                                    id: todo?.id,
                                    status: status
                                }).subscribe(result => {
                                    console.log(result);
                                });
                            }} 
                            checked={todo.status} 
                        />
                    </td>
                    <td>
                        <button 
                            onClick={async() => {
                                await client.mutation(DELETE_TODO, {id: todo?.id}).subscribe(result => {
                                    console.log(result);
                                });
                            }}
                        >Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
