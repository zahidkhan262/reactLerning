import React from "react";
import Functional from "./components/Functional";
import "./App.css";
// import Class from "./components/Class";
import { useState } from "react";
import Input from "./components/Input";
import HideShow from "./components/HideShow";
import Class from "./components/Class";
import FormValidtion from "./components/FormValidtion";
import ConditionalRendering from "./components/ConditionalRendering";
import FunctionAsProps from "./components/FunctionAsProps";

function App() {
  const [name, setName] = useState("___");
  const [print, setPrint] = useState(false);

  function getData() {
    alert("hey this is function props");
  }

  return (
    <>
      <FunctionAsProps data={getData} />
      <ConditionalRendering />
      <FormValidtion />
      <Input />
      <HideShow />
      {print ? <Functional name={name} /> : <Class />}
      {/* button use for change the state */}

      <div className="btn">
        <button
          onClick={() => {
            setName("Components");
          }}
        >
          Click
        </button>
        <button onClick={() => setPrint(!print)}>Toggle</button>
      </div>

      {/* <button onClick={() => setPrint(true)}>show</button> */}
    </>
  );
}

export default App;
