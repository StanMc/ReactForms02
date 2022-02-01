import React, { useState } from "react";

function App() {
  const [name, setName] = useState("Hello");
  const [buffer, setBuffer] = useState("");

  function handleFormChange(event) {
    setBuffer(event.target.value);
  }

  function handleButtonClick() {
    setName(buffer);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>{name} </h1>
      <form onSubmit={handleButtonClick}>
        <input
          onChange={handleFormChange}
          type="text"
          placeholder="What's your name?"
          value={buffer}
        />
        <button onClick={handleButtonClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
