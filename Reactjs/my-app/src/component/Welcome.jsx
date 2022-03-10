import React from "react";

function Welcome(props) {
  return (
    <>
      <h1>
        Hello,
        {props.text}
        <br />
        {props.text1}
      </h1>
      <p>Hello world</p>
    </>
  );
}

export default Welcome;
