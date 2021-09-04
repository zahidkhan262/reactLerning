import React from "react";
import { useState } from "react";

function Input() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  const getData = (val) => {
    // console.log(val.target.value);
    setData(val.target.value);
    setPrint(false);
  };
  return (
    <div className="center">
      {print ? <h1>{data}</h1> : null}
      <input type="text" onChange={getData} />
      {/*  input anything in input bar then it's show h1 tag  */}
      <button onClick={() => setPrint(true)}>press</button>
      {/* using button after press button it's show on h1 tag */}
    </div>
  );
}

export default Input;
