import React from "react";
import AddNewToDoForm from "./AddNewToDoForm";

const ToDoContainer = () => {
  return (
    <div className="todo-container">
      <img
        src="https://t3.ftcdn.net/jpg/01/00/65/64/360_F_100656447_xzaQm1D1p6oWUX4WCBX7LiDyD8Dw9sJw.jpg"
        alt="todo"
        className="todo-img"
      />

      <AddNewToDoForm />
    </div>
  );
};

export default ToDoContainer;
