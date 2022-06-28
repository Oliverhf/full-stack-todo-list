import React from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import TodoItem from "./types/TodoItem";
import TodoListItem from "./TodoListItem";


interface TodoItemsQueryResult {
  todoItems: TodoItem[];
}

export const GET_TODO_ITEMS = gql`
{
  todoItems {
    id
    content
    isCompleted
  }
}`

const TodoList = () => {
  const { data, loading } = useQuery<TodoItemsQueryResult>(GET_TODO_ITEMS);

  return (
    <div className="todo_list">
      <h3 className="todo_list__header">Todo Items</h3>
      <ul className="todo_list__list">
        {data?.todoItems?.map((item: TodoItem) => (
              <TodoListItem key={item.id} {...item} />
            ))
        }
      </ul>
    </div>
  );
};

export default TodoList;