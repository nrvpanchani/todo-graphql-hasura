import { gql } from "urql";

export const GET_TODOS = gql`
    query MyQuery{
        todo {
        id
        status
        task
        created_at
        }
    }
`;

export const UPDATE_TODO = gql`
  mutation UpdateTodo($id: uuid!, $status: Boolean!) {
    update_todo_by_pk(pk_columns: { id: $id }, _set: { status: $status }) {
      id
      status
    }
  }
`;

export const DELETE_TODO = gql`
  mutation DeleteTodo($id: uuid!) {
    delete_todo_by_pk(id: $id) {
      id
    }
  }
`;

export const ADD_TODO = gql`
  mutation AddTodo($task: String!) {
    insert_todo_one(object: { task: $task, status: false }) {
      task
      status
    }
  }
`;