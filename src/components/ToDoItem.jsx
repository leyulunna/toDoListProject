import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, onChecked] = useState(false);

  function checkItem() {
    onChecked((preBoolean) => {
      return !preBoolean;
    });
  }

  return (
    <div onClick={checkItem}>
      <li style={isDone ? { textDecoration: "line-through" } : null}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
