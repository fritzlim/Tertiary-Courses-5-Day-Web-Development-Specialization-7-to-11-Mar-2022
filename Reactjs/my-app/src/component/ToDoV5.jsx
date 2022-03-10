import React from "react";

class ToDoV5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item1: "Groceries", item2: "Lunch" };
  }

  render() {
    const { item1, item2 } = this.state;
    return (
      <>
        <h2>ToDo Version 5 (A ToDo list with buttons)</h2>
        <ol>
          <li>{item1}</li>
          <button
            onClick={() => {
              this.setState({ item1: "Completed" });
            }}
          >
            Done
          </button>
          <li>{item2}</li>
          <button
            onClick={() => {
              this.setState({ item2: "Completed" });
            }}
          >
            Done
          </button>
        </ol>
      </>
    );
  }
}

export default ToDoV5;
