import React from "react";

class ToDoV5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item1: "Groceries", item2: "Lunch" };
  }

  setItem(e) {
    if (e.target.value == "item1") {
      this.setState({ item1: "Completed" });
    } else if (e.target.value == "item2") {
      this.setState({ item2: "Completed" });
    }
    // console.log(e.target.value);
  }

  render() {
    const { item1, item2 } = this.state;
    return (
      <>
        <h2>ToDo Version 5 (A ToDo list with buttons)</h2>
        <ol>
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
          </li>
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
          </li>
        </ol>
      </>
    );
  }
}

export default ToDoV5;
