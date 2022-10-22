import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [listItem, setListItem] = useState([]);
  function handleChange(event) {
    const detail = event.target.value;
    setInputText(detail);
  }
  function addItem(prev) {
    setListItem((prev) => {
      return [...prev, inputText];
    });
    setInputText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItem.map((toDos) => (
            <li>{toDos}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
