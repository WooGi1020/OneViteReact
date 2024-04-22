import React, { useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
  };

  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h3>Todo List ✏️</h3>
      <input type="text" placeholder="할일 찾기" value={search} onChange={onChangeSearch} />
      <div className="todoitem-wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />;
        })}
      </div>
    </div>
  );
};

export default List;
