// Example of looping through items in an array.

function ToDoV4(props) {
  let elements1 = [];
  let elements2 = [];

  if (props.items1 !== undefined) {
    for (var i = 0; i < props.items1.length; i++) {
      elements1.push(<li key={`items1_${i}`}>{props.items1[i]}</li>);
    }
  }

  if (props.items2 !== undefined) {
    for (var j = 0; j < props.items2.length; j++) {
      elements2.push(<li key={`items2_${j}`}>{props.items2[j]}</li>);
    }
  }

  return (
    <>
      <h3>ToDoV4</h3>
      <h5>List 1</h5>
      <ol>{elements1}</ol>
      <h5>List 2</h5>
      <ol>{elements2}</ol>
    </>
  );
}

export default ToDoV4;
