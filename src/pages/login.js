import React from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Button from "react-validation/build/button";

import { isEmail } from "validator";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email!
      </div>
    );
  }
};
const Login = () => {
  return (
    <Form>
      <Input
        type="text"
        className="form-control"
        validations={[required, email]}
      />
      <Input
        type="password"
        className="form-control"
        validations={[required]}
      />
      <Button type="submit" />
    </Form>
  );
};

export default Login;
