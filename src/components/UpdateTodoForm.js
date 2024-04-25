import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { GrUpdate } from "react-icons/gr";
import { GiCancel } from "react-icons/gi";
import { updateTodo, cancelTodo } from "../redux/Features/todoSlice";

const UpdateTodoForm = () => {
  const dispatch = useDispatch();

  const temp = useSelector((state) => state.tempTodos);

  const [editTodo, setEditTodo] = useState(temp[0].title);
  console.log(temp[0].title);

  const onSubmitUpdateTodo = (e) => {
    e.preventDefault();

    console.log("ok");

    if (editTodo) {
      dispatch(
        updateTodo({
          id: temp[0].id,
          title: editTodo,
          completed: temp[0].completed,
        })
      );
    }
  };

  const onChangeUpdateTodo = (e) => {
    setEditTodo(e.target.value);
  };

  /*const onClickUpdateTodo = (e) => {
    e.preventDefault();

    if (editTodo) {
      dispatch(updateTodo({id: temp[0].id, title: editTodo, completed: temp[0].completed}));
    }

  };*/

  const onClickCancelTodo = () => {
    dispatch(cancelTodo());
  };

  return (
    <form
      className="update-todo-form flex flex-row items-center justify-between"
      onSubmit={onSubmitUpdateTodo}
    >
      <input
        type="text"
        className="update-todo-input"
        value={editTodo}
        onChange={onChangeUpdateTodo}
      />
      <div className="update-todo-btn-container flex flex-row items-center justify-evenly">
        <button
          className="btn flex flex-row items-center justify-center"
          type="submit"
        >
          <GrUpdate className="update-icon" />
        </button>
        <span
          title="Cancel ToDo"
          className="btn flex flex-row items-center justify-center"
        >
          <GiCancel className="cancel-icon" onClick={onClickCancelTodo} />
        </span>
      </div>
    </form>
  );
};

export default UpdateTodoForm;
