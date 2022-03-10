function ToDoV3(props) {
  if (props.items !== undefined) {
    return (
      <>
        <h3>{props.title}</h3>
        <ol>
          <li>{props.items[0]}</li>
          <li>{props.items[1]}</li>
        </ol>
      </>
    );
  } else return null;
}

export default ToDoV3;
