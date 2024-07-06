// import React from "react";

// function InputForm({ input, setInput }) {
//   function handleOnChange(e) {
//     setInput(e.target.value);
//   }
//   return (
//     <div>
//       <input
//         type="text"
//         name="input"
//         id="input"
//         value={input}
//         onChange={handleOnChange}
//       />
//     </div>
//   );
// }

// export default InputForm;

//pushing  the state down to the child component to avoid Unnecessary re render in the application
// import React, { useState } from "react";

// function InputForm() {
//   const [input, setInput] = useState();
//   function handleOnChange(e) {
//     setInput(e.target.value);
//   }
//   function reset() {
//     setInput("");
//   }
//   return (
//     <div>
//       <input
//         type="text"
//         name="input"
//         id="input"
//         value={input}
//         onChange={handleOnChange}
//       />
//       <button style={{ padding: "0.5rem", margin: "1rem" }} onClick={reset}>
//         Clear Input
//       </button>
//     </div>
//   );
// }

// export default InputForm;

//use children prop to avoid the re-rendering
import React, { useState } from "react";

function InputForm({ children }) {
  const [input, setInput] = useState();
  function handleOnChange(e) {
    setInput(e.target.value);
  }
  function reset() {
    setInput("");
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
      {children}
      <button style={{ padding: "0.5rem", margin: "1rem" }} onClick={reset}>
        Clear Input
      </button>
    </div>
  );
}

export default InputForm;
