import { Formik, Form, Field, FormikState, FormikHelpers } from "formik";
import React, { ReactElement, useContext } from "react";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { Col, Container, Row } from "react-bootstrap";
import { RegisterContext } from "../context/RegisterContext";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

const RegisterForm = (): ReactElement => {
  const initialValues: FormValues = {
    name: "",
    email: "",
    password: "",
  };

  const { isFormSubmitted, setFormSubmmited } = useContext(RegisterContext);
  const { values, setValues } = useContext(RegisterContext);

  const onSubmit = (values: FormValues, helpers: FormikHelpers<FormValues>) => {
    console.log("values", values);
    setFormSubmmited(true);
    setValues(values);
  };

  const validatePassword = (value) => {
    let errorMessage;
    if (!/^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(value)) {
      errorMessage =
        "Please make sure password include atleast 1 number, 1 letter and 1 special character and min length of 8";
    }
    return errorMessage;
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
          <Container>
            <Field name="name">
              {({ field, form, meta }) => (
                <div>
                  <Row>
                    <Col>
                      <label htmlFor="name">Name</label>
                    </Col>
                    <Col>
                      <InputText
                        {...field}
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
          </Container>

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
          <Field name="password" validate={validatePassword}>
            {({ field, form, meta }) => (
              <div>
                {/* <input type="text" {...field} placeholder="First Name" /> */}
                {/* <InputText {...field} /> */}
                <Row>
                  <Col>
                    <label htmlFor="password">Password</label>
                  </Col>
                  <Col>
                    <InputText
                      {...field}
                      type="password"
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

export default RegisterForm;
