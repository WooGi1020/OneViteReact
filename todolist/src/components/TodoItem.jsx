import React from "react";
import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheck = () => {
    onUpdate(id);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} readOnly onChange={onChangeCheck} />
      <div className={isDone ? "done-content" : "content"}>{content}</div>
      <div className="date">{new Date(date).toLocaleString().slice(0, 11)}</div>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
};

export default TodoItem;
