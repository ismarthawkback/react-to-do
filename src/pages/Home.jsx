import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import Todo from "../components/Todo";
import { ACTIONS } from "../context/TodosReducer";
import { Wrapper } from "../components/Todo";
import TodoForm from "../components/TodoForm";
import { styled } from "styled-components";
import { saveLocalStorageValue } from "../utils/LocalStorage";

const BigTextInput = styled.input`
  width: 85%;
  margin: 10px auto;
  font-size: 3em;
  padding: 20px;
`;

export default function Home() {
  const { todos, todosDispatcher } = useGlobalContext();
  useEffect(() => {
    // console.log("Modified Todos");
    saveLocalStorageValue("todos", JSON.stringify(todos));
  }, [todos]);
  const inputRef = useRef();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <BigTextInput
        placeholder="Enter to add new"
        ref={inputRef}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            var name = inputRef.current.value.trim();
            todosDispatcher({
              type: ACTIONS.ADD,
              payload: {
                name: name,
              },
            });
            inputRef.current.value = "";
          }
        }}
      />
      {todos.length === 0 && (
        <Wrapper>
          <h1>Add new Tasks and Complete Them : )</h1>
        </Wrapper>
      )}
      {todos.map((todo, index) => (
        <Todo
          key={index}
          todo={todo}
          deleteTodo={() => {
            todosDispatcher({
              type: ACTIONS.DELETE,
              payload: {
                id: todo.id,
              },
            });
          }}
          toggleTodo={() => {
            todosDispatcher({
              type: ACTIONS.TOGGLE,
              payload: {
                id: todo.id,
              },
            });
          }}
        />
      ))}
    </div>
  );
}
