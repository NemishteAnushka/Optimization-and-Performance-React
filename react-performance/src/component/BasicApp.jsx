import React, { useState } from "react";
import InputForm from "./InputForm";
import ExtraComponent from "./ExtraComponent";

function BasicApp() {
  const [input, setInput] = useState();

  function reset() {
    setInput("");
  }
  return (
    <div>
      <h1>Basic App</h1>
      <InputForm input={input} setInput={setInput} />
      <br />
      <button style={{ padding: "0.5rem", margin: "1rem" }} onClick={reset}>
        Clear Input
      </button>
      <ExtraComponent />
    </div>
  );
}

export default BasicApp;
