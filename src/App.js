
import "./App.css";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import "./Form.css"

function App() {
  return (
    <div className="App">
      <div className="LoginForm">

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address : </Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password : </Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="btn" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    </div>
  );
}

export default App;
