import React from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import TodoItem from "./types/TodoItem";
import TodoListItem from "./TodoListItem";


interface TodoItemsQueryResult {
  todoItems: TodoItem[];
}

const TodoList = () => {
  const { data, loading } = useQuery<TodoItemsQueryResult>(gql`
    {
      todoItems {
        id
        content
        isCompleted
      }
    }
  `);

  return (
    <div className="todo_list">
      <h3 className="todo_list__header">Todo Items</h3>
      <ul className="todo_list__list">
        {data?.todoItems
          ? data.todoItems.map((item) => (
              <TodoListItem key={item.id} {...item} />
            ))
          : null}
      </ul>
    </div>
  );
};

export default TodoList;