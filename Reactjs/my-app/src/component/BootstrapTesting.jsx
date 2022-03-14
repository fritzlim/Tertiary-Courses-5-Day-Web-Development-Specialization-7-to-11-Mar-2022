import { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Toast from "react-bootstrap/Toast";
import Form from "react-bootstrap/Form";

function BootstrapTesting(props) {
  const [show, toggleShow] = useState(true);
  const [userFeedbackOnChange, setUserFeedbackOnChange] = useState("");
  const [userFeedback, setUserFeedback] = useState("");
  const [showUserFeedbackAlert, setShowUserFeedbackAlert] = useState(false);

  const handleUserFeedbackOnChange = (e) => {
    setUserFeedbackOnChange(e.target.value);
    console.log(e.target.value);
  };

  const onSubmit = () => {
    console.log(userFeedbackOnChange);
    alert(
      `You typed:\n${userFeedbackOnChange}\n\nAlso see the broswer's console.`
    );
    setUserFeedback(userFeedbackOnChange);
    setShowUserFeedbackAlert(true);
  };

  return (
    <div className="mb-4">
      <h4 className="pb-3">Testing of Some React-Boostrap Components</h4>
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <h6 className="me-auto">React-Bootstrap Toast</h6>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>This is a toast</Toast.Body>
      </Toast>

      <div className="row my-3">
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

      <div className="mx-4">
        <h3 className="mb-3">Text Input Demo</h3>
        <Alert variant="primary">
          Hello, this is an alert. This is the submitted feedback shown in
          realtime: {userFeedbackOnChange}
        </Alert>
        {showUserFeedbackAlert && (
          <Alert variant="success">
            <Alert.Heading>
              <h6>Submited Feedback</h6>
            </Alert.Heading>
            <hr />
            This is the submitted feedback after the Send Feedback button is
            clicked: {userFeedback}
          </Alert>
        )}

        <Form.Group className="m-0">
          <Form.Control
            // as="textarea" // Uncomment this if you need a text area instead of a text box.
            type="text"
            rows="3"
            placeholder="Type your feedback here..."
            onChange={(e) => {
              handleUserFeedbackOnChange(e);
            }}
          />
          <Button
            className="my-3"
            variant="outline-success"
            onClick={() => {
              onSubmit();
            }}
          >
            Send Feedback
          </Button>
        </Form.Group>
      </div>
    </div>
  );
}

export default BootstrapTesting;
