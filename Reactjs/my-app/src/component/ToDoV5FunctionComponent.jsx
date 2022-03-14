import { useState } from "react";
// import { Button } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function ToDoV5FunctionComponent(props) {
  const [item1, setItem1] = useState("Buy Groceries");
  const [item2, setItem2] = useState("Buy Lunch");

  const [isitem1Deleted, setIsItem1Deleted] = useState(false);
  const [isitem2Deleted, setIsItem2Deleted] = useState(false);

  const [item1Class, setItem1Class] = useState("");
  const [item2Class, setItem2Class] = useState("");

  const setItem = (e) => {
    // console.log(e.target.value);

    if (e.target.value === "item1") {
      setItem1("Completed");
      setItem1Class("green");
    } else if (e.target.value === "item2") {
      setItem2("Completed");
      setItem2Class("green");
    }
  };

  const deleteItem = (e) => {
    if (e.target.value === "item1" && item1 === "Completed") {
      setIsItem1Deleted(true);
    } else if (e.target.value === "item2" && item2 === "Completed") {
      setIsItem2Deleted(true);
    }
  };

  return (
    <>
      <h3>ToDoV5FunctionComponent</h3>
      {/* <Button variant="primary">Primary</Button> */}
      <ol>
        {!isitem1Deleted && (
          <li className={item1Class}>
            {item1}{" "}
            <Button
              size="sm"
              className="mx-2 my-2"
              variant="outline-success"
              value="item1"
              onClick={(e) => {
                setItem(e);
              }}
            >
              Done
            </Button>
            <Button
              size="sm"
              variant="outline-danger"
              value="item1"
              onClick={(e) => {
                deleteItem(e);
              }}
            >
              Delete
            </Button>
          </li>
        )}

        {!isitem2Deleted && (
          <li className={item2Class}>
            {item2}{" "}
            <Button
              size="sm"
              className="mx-2 my-2"
              variant="outline-success"
              value="item2"
              onClick={(e) => {
                setItem(e);
              }}
            >
              Done
            </Button>
            <Button
              size="sm"
              variant="outline-danger"
              value="item2"
              onClick={(e) => {
                deleteItem(e);
              }}
            >
              Delete
            </Button>
          </li>
        )}
      </ol>
    </>
  );
}

export default ToDoV5FunctionComponent;
