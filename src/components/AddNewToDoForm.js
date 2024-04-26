import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTodo } from "../redux/Features/todoSlice";

import ToDoItem from "./ToDoItem";
import UpdateToDoForm from "./UpdateToDoForm";

const AddNewToDoForm = () => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const tempTodos = useSelector((state) => state.tempTodos);

  const addNewTodo = (e) => {
    e.preventDefault();

    if (todo) {
      dispatch(addTodo(todo));
      setTodo("");
    }
  };

  const onChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  return (
    <>
      {tempTodos.length > 0 ? (
        <UpdateToDoForm />
      ) : (
        <form onSubmit={addNewTodo} className="add-new-todo-form">
          <input
            type="text"
            className="add-new-todo-input"
            placeholder="Enter ToDo here..."
            value={todo}
            onChange={onChangeTodo}
          />
          <button type="submit" className="add-new-todo-btn">
            ADD TODO
          </button>
        </form>
      )}

      {todos.length > 0 ? (
        <ul className="todo-items-container">
          {todos &&
            todos.map((todo) => <ToDoItem key={todo.id} todoItem={todo} />)}
        </ul>
      ) : (
        <p className="no-todos">No Todos are available...</p>
      )}
    </>
  );
};

export default AddNewToDoForm;
