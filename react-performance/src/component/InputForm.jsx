import React from "react";

function InputForm({ input, setInput }) {
  function handleOnChange(e) {
    setInput(e.target.value);
  }
  return (
    <div>
      <input
        type="text"
        name="input"
        id="input"
        value={input}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default InputForm;
