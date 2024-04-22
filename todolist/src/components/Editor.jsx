import React, { useRef, useState } from "react";
import "./Editor.css";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === "") {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    inputRef.current.value = "";
  };
  return (
    <div className="Editor">
      <input
        type="text"
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
        ref={inputRef}
        placeholder="새로운 할일 ..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
