import React from "react";
import { useState } from "react";
import Class from "./Class";

function Functional(props) {
  // useState for update data
  const [count, setCount] = useState(0);

  const [title, setTitle] = useState("initialState");

  // increment
  const increment = () => {
    setCount(count + 1);
    setTitle("increment");
  };

  // decrement
  const decrement = () => {
    setCount(count - 1);
    setTitle("decrement");
  };
  return (
    <div className="container">
      <div className="counter-1">
        <h2>Functional {props.name}</h2>
        <h1>
          <span> {title}: </span>
          {count}
        </h1>
        <div className="incrementDecremnet-btn">
          <button onClick={decrement}>MINUS</button>
          <button onClick={increment}>PLUS</button>
        </div>
      </div>
      <Class name={props.name} />
    </div>
  );
}

export default Functional;
