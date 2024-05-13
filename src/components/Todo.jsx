import React from "react";
import { styled } from "styled-components";
import Slider from "../components/Slider";

export const Wrapper = styled.div`
  width: 80%;
  margin: 10px auto;
  border: 1px solid;
  padding: 0rem 1rem;
  border-radius: 10px;
`;

const TodoTop = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

const TodoBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DeleteButton = styled.button`
  background-color: #bf4f74;
  align-self: center;
  padding: 10px;
  border-radius: 10%;
  border: 0px none;
  &:hover {
    // background-color: yellow;
    cursor: pointer;
  }
`;

export default function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <Wrapper>
      <TodoTop>
        <p>
          <strong>Task : </strong>
          <br />
          <br />
          {todo.name}
        </p>
        <Slider checked={todo.completed} toggle={toggleTodo} />
      </TodoTop>
      <TodoBottom>
        <p>id : {todo.id}</p>
        <DeleteButton onClick={deleteTodo}>Delete</DeleteButton>
      </TodoBottom>
    </Wrapper>
  );
}
