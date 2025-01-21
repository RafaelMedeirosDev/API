import React from 'react';
import Form from 'react-bootstrap/Form';

function inputPassword() {
  return (
    <>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      </Form.Group>
    </>
  );
}

export default inputPassword;