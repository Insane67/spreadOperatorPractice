import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handlerInput(event) {
    const { value } = event.target;
    setInputText(value);
    console.log(inputText);
  }

  function handlerClick(event) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    //input texti temizle
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={inputText} onChange={handlerInput} type="text" />
        <button onClick={handlerClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
