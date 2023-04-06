import React from "react";
import styled from "styled-components";
import TodoItem from "../TodoItem/TodoItem";
import { useTodoState } from "../../TodoContext";

const TodoListBlock = styled.div`
  flex: 1;
  // flex: 1 스타일을 설정함으로써 자신이 차지 할 수 있는 영역을 꽉 채우도록 설정
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

export default function TodoList() {
  const todos = useTodoState();

  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </TodoListBlock>
  );
}

// TodoList 에서는 state 를 조회하고 이를 렌더링해주어야 합니다.
// 그리고, onToggle, onRemove 와 같이 항목에 변화를 주는 작업은 이 컴포넌트에서 신경 쓸 필요 없습니다.
// 이 작업은 우리가 각 TodoItem 에서 해줄 것입니다.
