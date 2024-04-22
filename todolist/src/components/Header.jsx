import React from "react";
import "./Header.css";

const Header = () => {
  const date = new Date();

  const formatedDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}년 ${month}월 ${day}일`;
  };
  const today = formatedDate(date);

  return (
    <div className="Header">
      <h3>오늘은 🗓️</h3>
      <p>{today}</p>
    </div>
  );
};

export default Header;
