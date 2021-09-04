import React from "react";
import { useState } from "react";
function FormValidtion() {
  const [name, setName] = useState("");
  const [check, setCheck] = useState(false);
  const [select, setSelect] = useState("");

  const submitHandle = (e) => {
    console.log(name, check, select);
    e.preventDefault();
  };
  return (
    <>
      <div className="container">
        <form onSubmit={submitHandle}>
          <div className="first-field">
            <input
              placeholder="text here..."
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="first-field">
            <select onChange={(e) => setSelect(e.target.value)}>
              <option>Select one </option>
              <option>Python </option>
              <option>java </option>
              <option>Nodejs </option>
              <option>Php</option>
            </select>
          </div>
          <div className="first-field">
            <input type="checkbox" onChange={(e) => setCheck(e.target.value)} />
            <span>Remember Me</span>
          </div>
          <div className="first-field">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormValidtion;
