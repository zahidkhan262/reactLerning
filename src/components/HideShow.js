import React from "react";
import { useState } from "react";
import Input from "./Input";
function HideShow(props) {
  const [hideShow, setHideShow] = useState(true);
  return (
    <>
      <div className="container">
        {hideShow ? <Input /> : ""}

        <button onClick={() => setHideShow(false)}>Hide</button>
        <button onClick={() => setHideShow(true)}>Show</button>
      </div>
    </>
  );
}

export default HideShow;
