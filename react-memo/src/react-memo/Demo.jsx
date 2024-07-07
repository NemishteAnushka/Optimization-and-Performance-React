import React from "react";
import { useState } from "react";
import Card from "./Card";

function Demo() {
  const [state1, setstate1] = useState(false);
  const [state2, setstate2] = useState(false);
  console.log("demo rendered")
  return (
    <div style={{ background: "#efefef", padding: "1rem" }}>
      <label htmlFor="">State 1</label>
      <input
        type="checkbox"
        name="state1"
        id="state1"
        checked={state1}
        onChange={() => {
          setstate1(!state1);
        }}
      />
      <label htmlFor="">State 2</label>
      <input
        type="checkbox"
        name="state2"
        id="state2"
        checked={state2}
        onChange={() => {
          setstate2(!state2);
        }}
      />
      <Card state1={state1} />
    </div>
  );
}

export default Demo;
