import React, { useReducer, createContext, useContext, useRef } from "react";

const initialTodos = [
  {
    id: 1,
    text: "끝내주게 숨쉬기",
    done: true,
  },
  {
    id: 2,
    text: "멋지게 잠자기",
    done: true,
  },
  {
    id: 3,
    text: "작살나게 밥 먹기",
    done: false,
  },
  {
    id: 4,
    text: "죽이게 쉬기",
    done: false,
  },
];

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  return useContext(TodoStateContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

export function useTodoNextId() {
  return useContext(TodoNextIdContext);
}

// 이제, state 와 dispatch 를 Context 통하여 다른 컴포넌트에서 바로 사용 할 수 있게 해줄건데요,
// 우리는 하나의 Context 를 만들어서 state 와 dispatch 를 함께 넣어주는 대신에,
// 두개의 Context 를 만들어서 따로 따로 넣어줄 것입니다.
// 이렇게 하면 dispatch 만 필요한 컴포넌트에서 불필요한 렌더링을 방지 할 수 있습니다.
// 추가적으로, 사용하게 되는 과정에서 더욱 편리하기도 합니다.

// Context 에서 사용 할 값을 지정 할 때에는 위와 같이 Provider 컴포넌트를 렌더링 하고 value 를 설정해주면 됩니다.
// 그리고, props 로 받아온 children 값을 내부에 렌더링해주세요.
// 이렇게 하면 다른 컴포넌트에서 state 나 dispatch를 사용하고 싶을 때 다음과 같이 할 수 있습니다.

// 우리는 컴포넌트에서 useContext 를 직접 사용하는 대신에,
// useContext 를 사용하는 커스텀 Hook 을 만들어서 내보내주겠습니다.

// nextId 값을 위한 Context 를 만들 때에도 마찬가지로 useTodoNextId 라는 커스텀 Hook을 따로 만들어주었습니다.
