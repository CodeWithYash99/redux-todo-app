import React from "react";

import { GrUpdate } from "react-icons/gr";
import { GiCancel } from "react-icons/gi";

const UpdateTodoForm = () => {
  const updateTodoForm = (e) => {
    e.preventDefault();
    console.log("updateTodoForm");
  };

  return (
    <form
      onSubmit={updateTodoForm}
      className="update-todo-form flex flex-row items-center justify-between"
    >
      <input type="text" className="update-todo-input" />
      <div className="update-todo-btn-container flex flex-row items-center justify-evenly">
        <span
          title="Update ToDo"
          className="btn flex flex-row items-center justify-center"
        >
          <GrUpdate className="update-icon" />
        </span>
        <span
          title="Cancel ToDo"
          className="btn flex flex-row items-center justify-center"
        >
          <GiCancel className="cancel-icon" />
        </span>
      </div>
    </form>
  );
};

export default UpdateTodoForm;
