import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick(event) {
    setValue(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {value} </h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
