import React from "react";
import { useState } from "react";
function ConditionalRendering() {
  //   const [loggedIn, setLoggedIn] = useState(1);
  const loggedIn = 2 ;
  return (
    <>
      <div className="container">
        {loggedIn == 1n ? (
          <h1>Zahid khan learning React js</h1>
        ) : loggedIn == 2 ? (
          <h1>Zahid khan learning Node js</h1>
        ) : (
          <h1>zahid khan learning MongoDB</h1>
        )}
      </div>
    </>
  );
}

export default ConditionalRendering;
