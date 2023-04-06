import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./Components/TodoTemplate/TodoTemplate";
import TodoHead from "./Components/TodoHead/TodoHead";
import TodoList from "./Components/TodoList/TodoList";
import TodoCreate from "./Components/TodoCreate/TodoCreate";
import { TodoProvider } from "./TodoContext";
// import './App.css';

const GlobalStyle = createGlobalStyle`
  body {
    background: #CFCCCC;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
