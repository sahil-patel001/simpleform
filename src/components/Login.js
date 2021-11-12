import React from "react";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";
import loginImg from "../assets/login.png"

const Login = () => {

  const hasLogin = () => {
    console.log()
  }

  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Required"),
    password: Yup.string().required("Password is required"),
  });
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
    >
      {(formik) => (
        <div className="d-flex">
          <div className="col-md-5">
            <h1 className="my-4 font-weight-bold-display-4">Login</h1>
            <Form onSubmit={hasLogin}>
              <TextField label="Email" name="email" type="email" />
              <TextField label="Password" name="password" type="password" />
              <button className="btn btn-dark mt-3" type="submit">
                Login
              </button>
              <button className="btn btn-danger mt-3 ms-3" type="reset">
                Reset
              </button>
            </Form>
          </div>
          <div className="col-md-7">
            <img className="img-fluid w-100" src={loginImg} alt="" />
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Login;
