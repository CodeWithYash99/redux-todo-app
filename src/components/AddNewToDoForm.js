import React from "react";

const AddNewToDoForm = () => {
  const addNewTodo = (e) => {
    e.preventDefault();
    console.log("add new todo");
  };

  return (
    <form onSubmit={addNewTodo} className="add-new-todo-form">
      <input
        type="text"
        className="add-new-todo-input"
        placeholder="Enter ToDo here..."
      />
      <button type="submit" className="add-new-todo-btn">
        ADD TODO
      </button>
    </form>
  );
};

export default AddNewToDoForm;
