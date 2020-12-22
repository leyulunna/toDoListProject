import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id){
    setItems((prevItems)=>{
      return prevItems.filter((itemOnList, index)=>{
        return id !== index
      })
    })
  }

  const year = new Date().getFullYear();

  return (
    <div>
      <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem key={index} id={index} text={todoItem} delete={deleteItem}/>
          ))}
        </ul>
      </div>
    </div>
    <div className="footer">
        <p>Copyright @ {year}
        <a className="fab fa-github" href="https://github.com/leyulunna/todo-list" target="_blank"></a>
        </p>
    </div>
  </div>
  );
}

export default App;
