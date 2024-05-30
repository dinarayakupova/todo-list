import React, { useState } from "react";

const ToDoForm = ({ addToDo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addToDo(value);
      setValue("");
    }
  };

  return (
    <form className="ToDoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="toDo-input"
        value={value}
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="toDo-btn">
        Add Task
      </button>
    </form>
  );
};

export default ToDoForm;
