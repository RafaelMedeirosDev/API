import React from 'react';
import Form from 'react-bootstrap/Form';

function InputEmail() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email: </Form.Label>
        <Form.Control type="email" placeholder="email@email.com" />
      </Form.Group>
    </Form>
  );
}

export default InputEmail;