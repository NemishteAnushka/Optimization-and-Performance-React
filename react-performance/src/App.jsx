import React from "react";
import BasicApp from "./component/BasicApp";
//re-rendering components in ReactJS is a part of the React Component Lifecycle and is called by React only. React components automatically re-render whenever there is a change in their state or props and provide dynamic content in accordance with user interactions.

// Re-render mainly occurs if there is

// Update in State
// Update in prop
// Re-rendering of the parent component
// Unnecessary re-renders affect the app performance and cause loss of users’ battery which surely no user would want. Let’s see in detail why components get re-rendered and how to prevent unwanted re-rendering to optimize app components
function App() {
  return (
    <div>
      <h1>Re-rendering in Reactjs</h1>
      <BasicApp />
    </div>
  );
}

export default App;
