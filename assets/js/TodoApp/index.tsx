import React from "react";
import client from "./client";
import { ApolloProvider } from "@apollo/client";
import TodoList from "./TodoList";

const TodoApp = () => {
  return (
    <ApolloProvider client={client}>
      <TodoList />
    </ApolloProvider>
  );
};

export default TodoApp;