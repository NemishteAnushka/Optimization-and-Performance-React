import React from "react";
import BasicApp from "./component/BasicApp";
//re-rendering components in ReactJS is a part of the React Component Lifecycle and is called by React only. React components automatically re-render whenever there is a change in their state or props and provide dynamic content in accordance with user interactions.

// Re-render mainly occurs if there is

// Update in State
// Update in prop
// Re-rendering of the parent component
// Unnecessary re-renders affect the app performance and cause loss of users’ battery which surely no user would want. Let’s see in detail why components get re-rendered and how to prevent unwanted re-rendering to optimize app components

//tool to measure the performace

// ReactJS Profilers is a tool for profiling the react components, It measures how many times the react Application is rendered and how much time the components take to be rendered. It helps to identify the parts of the application that are slow so that the developer can optimize it for better performance.
function App() {
  return (
    <div>
      <h1>Re-rendering in Reactjs</h1>
      <BasicApp />
    </div>
  );
}

export default App;
