import React from "react";

import { useDispatch } from "react-redux";
import { IoMdDoneAll } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {
  completeTodo,
  editTodo,
  deleteTodo,
} from "../redux/Features/todoSlice";

const ToDoItem = ({ todoItem }) => {
  const dispatch = useDispatch();

  const completeTodoHandler = () => {
    dispatch(completeTodo(todoItem.id));
  };

  const editTodoHandler = () => {
    dispatch(editTodo(todoItem.id));
  };

  const deleteTodoHandler = () => {
    dispatch(deleteTodo(todoItem.id));
  };

  return (
    <li className="todo-item-container flex flex-row items-center justify-between">
      <p
        className={
          todoItem.completed ? "todo-item-complete-tilte" : "todo-item-title "
        }
      >
        {todoItem.title}
      </p>
      <div className="todo-item-icons flex flex-row items-center justify-around">
        <span title="Complete" onClick={completeTodoHandler}>
          <IoMdDoneAll
            className={
              todoItem.completed
                ? "icon todo-item-complete-icon"
                : "icon todo-item-not-complete-icon"
            }
          />
        </span>
        {todoItem.completed ? (
          ""
        ) : (
          <span title="Edit" onClick={editTodoHandler}>
            <FaEdit className="icon todo-item-edit-icon" />
          </span>
        )}

        <span title="Delete" onClick={deleteTodoHandler}>
          <AiFillDelete className="icon todo-item-delete-icon" />
        </span>
      </div>
    </li>
  );
};

export default ToDoItem;
