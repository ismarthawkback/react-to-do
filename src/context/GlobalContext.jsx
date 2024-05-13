import { createContext, useContext, useReducer } from "react";
import TodosReducer from "./TodosReducer";
import { nanoid } from "nanoid";
import { getLocalStorageValue } from "../utils/LocalStorage";

export const GlobalContext = createContext();
export const getNewTodo = (name) => {
  return { id: nanoid(), name: name, completed: false };
};

var initialTodos = [
  getNewTodo("First Dummy Todo"),
  getNewTodo("Second Dummy Todo"),
];

initialTodos = getLocalStorageValue("todos", initialTodos);
console.log(initialTodos);

export const GlobalContextProvider = ({ children }) => {
  const [todos, todosDispatcher] = useReducer(TodosReducer, initialTodos);
  return (
    <GlobalContext.Provider
      value={{
        todos,
        todosDispatcher,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
