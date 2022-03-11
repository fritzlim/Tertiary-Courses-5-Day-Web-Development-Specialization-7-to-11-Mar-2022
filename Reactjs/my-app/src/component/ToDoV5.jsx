import React from "react";

class ToDoV5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item1: "Groceries",
      item2: "Lunch",
      isItem1Deleted: false,
      isItem2Deleted: false,
    };
  }

  setItem(e) {
    if (e.target.value === "item1") {
      this.setState({ item1: "Completed" });
    } else if (e.target.value === "item2") {
      this.setState({ item2: "Completed" });
    }
    // console.log(e.target.value);
  }

  deleteItem = (e) => {
    if (e.target.value === "item1" && this.state.item1 === "Completed") {
      this.setState({ isItem1Deleted: true });
    } else if (e.target.value === "item2" && this.state.item2 === "Completed") {
      this.setState({ isItem2Deleted: "Completed" });
    }
  };

  render() {
    const { item1, item2, isItem1Deleted, isItem2Deleted } = this.state;
    return (
      <>
        <h2>ToDo Version 5 (A ToDo list with buttons)</h2>
        <ol>
          {!isItem1Deleted && (
            <li>
              {item1}
              <button
                value="item1"
                onClick={(e) => {
                  this.setItem(e);
                }}
              >
                Done
              </button>
              <button
                value="item1"
                onClick={(e) => {
                  this.deleteItem(e);
                }}
              >
                Delete
              </button>
            </li>
          )}
          {!isItem2Deleted && (
            <li>
              {item2}
              <button
                value="item2"
                onClick={(e) => {
                  this.setItem(e);
                }}
              >
                Done
              </button>
              <button
                value="item2"
                onClick={(e) => {
                  this.deleteItem(e);
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
}

export default ToDoV5;
