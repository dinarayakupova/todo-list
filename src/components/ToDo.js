import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ToDo = ({ task, toggleComplete, editToDo, deleteToDo }) => {
  return (
    <div className="ToDo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editToDo(task.id)}
        />
        <FontAwesomeIcon 
        icon={faTrash} 
        onClick={() => deleteToDo(task.id)} />
      </div>
    </div>
  );
};

export default ToDo;
