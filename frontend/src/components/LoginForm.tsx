import { Formik, Form, Field, FormikState, FormikHelpers } from "formik";
import React, { ReactElement, useContext } from "react";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { Col, Container, Row } from "react-bootstrap";
import { LoginFormContext } from "../context/LoginFormContext";

type FormValues = {
  email: string;
  password: string;
};

const LoginForm = (): ReactElement => {
  const initialValues: FormValues = {
    email: "",
    password: "",
  };

  const { isFormSubmitted, setFormSubmmited } = useContext(LoginFormContext);
  const { values, setValues } = useContext(LoginFormContext);

  const onSubmit = (values: FormValues, helpers: FormikHelpers<FormValues>) => {
    setFormSubmmited(true);
    setValues(values);
  };

  const validateEmail = (value) => {
    let errorMessage;
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      errorMessage = "Worng email format";
    }
    return errorMessage;
  };

  return (
    <div className="card flex justify-content-center">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field name="email" validate={validateEmail}>
            {({ field, form, meta }) => (
              <div>
                {/* <input type="text" {...field} placeholder="First Name" /> */}
                {/* <InputText {...field} /> */}
                <Row>
                  <Col>
                    <label htmlFor="email">Email</label>
                  </Col>
                  <Col>
                    <InputText
                      {...field}
                      required
                      className={classNames({
                        "p-invalid": meta.touched && meta.error,
                      })}
                    />
                  </Col>
                </Row>
                {meta.touched && meta.error && (
                  <Row>
                    <small className="p-error">{meta.error}</small>
                  </Row>
                )}
              </div>
            )}
          </Field>
          <Field name="password">
            {({ field, form, meta }) => (
              <div>
                <Row>
                  <Col>
                    <label htmlFor="password">Password</label>
                  </Col>
                  <Col>
                    <InputText
                      {...field}
                      type="password"
                      required
                      className={classNames({
                        "p-invalid": meta.touched && meta.error,
                      })}
                    />
                  </Col>
                </Row>
                {meta.touched && meta.error && (
                  <Row>
                    <small className="p-error">{meta.error}</small>
                  </Row>
                )}
              </div>
            )}
          </Field>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
