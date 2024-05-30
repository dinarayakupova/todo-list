import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";
import { v4 as uuidv4 } from "uuid";
import EditToDoForm from "./EditToDoForm";
uuidv4();

export const ToDoWrapper = () => {
  const [toDos, setToDos] = useState([]);

  const addToDo = (toDo) => {
    setToDos([
      ...toDos,
      { id: uuidv4(), 
        task: toDo, 
        completed: false,
        isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setToDos(
      toDos.map((toDo) =>
        toDo.id === id
          ? {
              ...toDo,
              completed: !toDo.completed,
            }
          : toDo
      )
    );
  };

  const deleteToDo = (id) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  };

  const editToDo = (id) => {
    setToDos(
      toDos.map((toDo) =>
        toDo.id === id ? { ...toDo, isEditing: !toDo.isEditing } : toDo
      )
    );
  };

  const editTask = (task, id) => {
    setToDos(
      toDos.map((toDo) =>
        toDo.id === id ? { ...toDo, task, isEditing: !toDo.isEditing } : toDo
      )
    );
  };

  return (
    <div className="ToDoWrapper">
      <h1>Get Things Done</h1>
      <ToDoForm addToDo={addToDo} />
      {/* display todos */}
      {toDos.map((toDo) =>
        toDo.isEditing ? (
          <EditToDoForm 
          editToDo={editTask} 
          task={toDo}
          key={toDo.id}  />
        ) : (
          <ToDo
            task={toDo}
            key={toDo.id}
            toggleComplete={toggleComplete}
            deleteToDo={deleteToDo}
            editToDo={editToDo}
          />
        )
      )}
    </div>
  );
};
