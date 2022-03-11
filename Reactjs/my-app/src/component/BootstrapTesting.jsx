import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Toast from "react-bootstrap/Toast";

function BootstrapTesting(props) {
  return (
    <>
      <Button variant="primary">Primary</Button>
      <Alert variant="primary">Hello</Alert>
      <Toast show={true}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>This is a toast</Toast.Body>
      </Toast>
    </>
  );
}

export default BootstrapTesting;
