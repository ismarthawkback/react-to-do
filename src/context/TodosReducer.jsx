import { getNewTodo } from "./GlobalContext";

export const ACTIONS = {
  ADD: "add",
  DELETE: "delete",
  TOGGLE: "toggle",
};

const TodosReducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return [getNewTodo(action.payload["name"]), ...todos];
    case ACTIONS.DELETE:
      return todos.filter((todo) => todo.id !== action.payload["id"]);
    case ACTIONS.TOGGLE:
      var newTodos = [];
      todos.forEach((todo) => {
        if (todo.id !== action.payload.id) newTodos.push(todo);
        else {
          var k = todo.completed;
          newTodos.push({ ...todo, completed: k ? false : true });
        }
      });
      return newTodos;
    default:
      return todos;
  }
};

export default TodosReducer;
