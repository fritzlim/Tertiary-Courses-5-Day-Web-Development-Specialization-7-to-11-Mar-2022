import { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Toast from "react-bootstrap/Toast";

function BootstrapTesting(props) {
  const [show, toggleShow] = useState(true);

  return (
    <>
      <h4>Testing of Some React-Boostrap Components</h4>
      <div className="row">
        <div className="col">
          {!show && (
            <Button onClick={() => toggleShow(true)}>Show Toast</Button>
          )}
        </div>
        <div className="col">
          <Button
            variant="primary"
            onClick={() => {
              alert("Button clicked");
            }}
          >
            Primary
          </Button>
        </div>
      </div>
      <Alert variant="primary">Hello, this is an alert</Alert>
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <h6>React-Bootstrap Toast</h6>
        </Toast.Header>
        <Toast.Body>This is a toast</Toast.Body>
      </Toast>
    </>
  );
}

export default BootstrapTesting;
