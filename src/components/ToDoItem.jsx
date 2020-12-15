import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, onChecked] = useState(false);

  function checkItem() {
    onChecked((preBoolean) => {
      return !preBoolean;
    });
  }

  function cancelItem(){
    props.delete(props.id)
    document.getElementById("todoText").focus();
  }

  return (
    <div>
      <li style={isDone ? { textDecoration: "line-through" } : null}>
        <span id="item" onClick={checkItem}>{props.text}</span>
        <button onClick={cancelItem}>Delete</button>
      </li>
    </div>
  );
}

export default ToDoItem;
