import React, { useState } from "react";

function App() {
  const [name, setName] = useState("Hello");
  const [buffer, setBuffer] = useState("What is your name?");

  function handleFormChange(event) {
    setBuffer(event.target.value);
  }

  function handleButtonClick() {
    setName(buffer);
  }

  return (
    <div className="container">
      <h1>{name} </h1>
      <input
        onChange={handleFormChange}
        type="text"
        placeholder="What's your name?"
        value={buffer}
      />
      <button onClick={handleButtonClick}>Submit</button>
    </div>
  );
}

export default App;
