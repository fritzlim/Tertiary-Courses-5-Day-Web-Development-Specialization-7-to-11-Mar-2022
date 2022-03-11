import { useEffect, useState } from "react";

function ClockFunctionComponent(props) {
  const [timestamp, setTimestamp] = useState(new Date());

  const [runAgain, setRunAgain] = useState(false);
  const [runAgain2, setRunAgain2] = useState(false);

  const tick = () => {
    setTimestamp(new Date());
  };

  let timerID = null;

  useEffect(() => {
    // Same as ComponentDidMount()
    timerID = setInterval(() => tick(), 1000);

    return () => {
      // This code is called when the component unmounts.
      clearInterval(timerID);
    };
  }, []);

  useEffect(() => {
    // To demo what the dependency array is for.
    // Same as ComponentDidMount()
    console.log("hello");
  }, [runAgain, runAgain2]);

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {timestamp.toLocaleTimeString()}.</h2>
      <button
        onClick={() => {
          setRunAgain(!runAgain);
        }}
      >
        Change the state of runAgain
      </button>

      <button
        onClick={() => {
          setRunAgain2(!runAgain2);
        }}
      >
        Change the state of runAgain2
      </button>
    </div>
  );
}

export default ClockFunctionComponent;
