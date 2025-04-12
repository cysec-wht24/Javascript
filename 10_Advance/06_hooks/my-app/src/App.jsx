/* 

// https://react.dev/learn#using-hooks

// https://www.w3schools.com/react/react_hooks.asp

=> React Hooks are special functions introduced in React 16.8 that allow developers 
to use state and other React features in functional components.
=> They enable functional components to manage state, handle side effects, and access 
lifecycle methods without needing to convert them into class components.
=> Hows are functions that make functonal components work like class components.

Use Cases of React Hooks:
  => Managing component state in functional components.
  => Handling side effects like data fetching, subscriptions, or manually changing the DOM.
  => Sharing logic between components using custom hooks.
  => Simplifying code structure by avoiding complex class-based components.

Types of React Hooks:

=> Basic Hooks:
  1) useState: 
    Add state in a functional component. 
    State is nothing but just values or variables of your component.
  2) useEffect: Handles side effects in a functional component.
  3) useContext: Accesses the context API to share data between components.

=> Additional Hooks:
  1) useReducer: Manages complex state logic using a reducer function.
  2) useCallback: Memoizes callback functions to optimize performance.
  3) useMemo: Memoizes values to avoid unnecessary recalculations.
  4) useRef: Accesses and manipulates DOM elements or persists mutable values.
  5) useImperativeHandle: Customizes the instance value exposed when using React.forwardRef.
  6) useLayoutEffect: Similar to useEffect, but fires synchronously after all DOM mutations.
  7) useDebugValue: Displays custom labels in React DevTools for custom hooks.

=> Custom Hooks:
  Developers can create custom hooks to encapsulate and reuse logic across multiple components. 
  Custom hooks are functions that start with the prefix use.
 
  */

import React, {useState} from 'react';

const App = () => { // can use multiple useState hook in a single component

  // const [counter, setCounter] = useState(0); // array destructuring
  // const array = useState(0);
  // const counter = array[0]; // Now the second element of the array returns a function
  // const setCounter = array[1]; // This function is used to update the state
  // const [name, setName] = useState("");
  // whenever you work with object or array you always have to use all 
  // previous values and update whatever we want to update 

  const [details, setDetails] = useState({counter: 0, name: ""});


  function increaseCounter() {
    setDetails((prev)=> ({
      ...prev, counter: prev.counter + 1,
    }));
  }

console.log(details); // whenever you update the state, it will re-render the component
  return (
    <div>
      <input type="text" onChange={(e) => setDetails((prev) => ({ ...prev, name: e.target.value }))} />
      <h1>{details.name} has clicked {details.counter} times!! </h1>
      <button onClick={increaseCounter}>Increase</button>
    </div>
  );
};

export default App;