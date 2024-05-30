import React, { useState } from "react";

const EditToDoForm = ({ editToDo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      editToDo(value, task.id);
      setValue("");
    }
  };

  return (
    <form className="ToDoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="toDo-input"
        value={value}
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="toDo-btn">
        Update Task
      </button>
    </form>
  );
};

export default EditToDoForm;
