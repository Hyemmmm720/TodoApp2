import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;
  // 페이지 중앙에 나타나도록 설정

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

export default function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}
// TodoTemplate은 children이라는 props를 받고, TodoTemplateBlock 컴포넌트 안에 {children}을 렌더링하고 있다.
// 그래서 TodoTemplate으로 TodoTemplateBlock을 감싸고 있는데,
// 이 때 TodoTemplate 컴포넌트가 감싸고 있는 자식 요소들이 TodoTemplateBlock의 {children}으로 들어가게 됩니다.
// 따라서 TodoTemplate 컴포넌트로 감싸진 자식 요소들은 TodoTemplateBlock 안에서 렌더링되게 됩니다.
