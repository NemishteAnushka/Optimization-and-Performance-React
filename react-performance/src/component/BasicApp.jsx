import React, { useState } from "react";
import InputForm from "./InputForm";
import ExtraComponent from "./ExtraComponent";

function BasicApp() {
  // const [input, setInput] = useState();

  return (
    <div>
      <h1>Basic App</h1>

      {/* avoid using state in parent component to avoid re renders */}
      {/* <InputForm input={input} setInput={setInput} /> */}
      {/* <InputForm /> */}

      {/* another way to prevent the re - rendering of a component is use children prop in thw component */}

      {/* now extra component is child of inputform */}
      <InputForm>
        <ExtraComponent />
      </InputForm>
    </div>
  );
}

export default BasicApp;
