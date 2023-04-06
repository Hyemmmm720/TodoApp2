import React from "react";
import styled from "styled-components";
import { useTodoState } from "../../TodoContext";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #4a4848;
  }
  .day {
    margin-top: 4px;
    color: #343a40;
    font-size: 21px;
  }
  .tesks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

export default function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tesks-left">오늘 할 일 {undoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  );
}

// 이 컴포넌트에서는 TodoHeadBlock 안에 들어있는 내용들에 대하여 일일이 컴포넌트를 만드는 대신에
// 그냥 일반 HTML 태그를 사용하고 TodoHeadBlock 의 스타일에서 CSS Selector 를 사용하여 스타일링을 해줌

// 코드 저장 후, 브라우저에서 "할 일 2개 남음" 이 여전히 잘 보여지고 있는지 확인해보세요.
// 그 다음에는, 날짜가 보여지는 부분을 작업해주겠습니다.
// 이 과정에서는 Date 의 toLocaleString 이라는 함수를 사용합니다.

// 코드를 저장하고 오늘의 날짜가 잘 보여지는지 확인해보세요.
