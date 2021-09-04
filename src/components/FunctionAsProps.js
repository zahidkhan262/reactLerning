import React from "react";

function FunctionAsProps(props) {
  return (
    <div>
      <h1>child componets </h1>
      <button onClick={props.data}>Click</button>
    </div>
  );
}

export default FunctionAsProps;
