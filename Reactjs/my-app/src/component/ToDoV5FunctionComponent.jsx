import { useState } from "react";

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
      <ol>
        {!isitem1Deleted && (
          <li className={item1Class}>
            {item1}{" "}
            <button
              value="item1"
              onClick={(e) => {
                setItem(e);
              }}
            >
              Done
            </button>
            <button
              value="item1"
              onClick={(e) => {
                deleteItem(e);
              }}
            >
              Delete
            </button>
          </li>
        )}

        {!isitem2Deleted && (
          <li className={item2Class}>
            {item2}{" "}
            <button
              value="item2"
              onClick={(e) => {
                setItem(e);
              }}
            >
              Done
            </button>
            <button
              value="item2"
              onClick={(e) => {
                deleteItem(e);
              }}
            >
              Delete
            </button>
          </li>
        )}
      </ol>
    </>
  );
}

export default ToDoV5FunctionComponent;