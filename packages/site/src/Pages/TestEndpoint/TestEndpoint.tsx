import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

interface TestFormValues {
  name: string;
  email?: string;
}

export const TestEndpointPage: React.FC = () => {
  const initialValues: TestFormValues = {
    name: "",
    email: "",
  };

  const validate = (values: TestFormValues) => {
    const errors: Record<string, string> = {};
    if (!values.name) {
      errors.name = "Name is required";
    } else if (values.name.length < 2) {
      errors.name = "Name is too short";
    }
    if (values.email && !/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid email format";
    }
    return errors;
  };

  const handleSubmit = (values: TestFormValues) => {
    alert(`Test form`);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Test Form</h2>
      <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="name">Name</label>
              <Field
                name="name"
                type="text"
                placeholder="Enter Name"
                style={{ display: "block", width: "100%", padding: "8px" }}
              />
              <ErrorMessage name="name">
                {(msg) => <div style={{ color: "red", fontSize: "12px" }}>{msg}</div>}
              </ErrorMessage>
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="email">Email (optional)</label>
              <Field
                name="email"
                type="email"
                placeholder="Enter your email"
                style={{ display: "block", width: "100%", padding: "8px" }}
              />
              <ErrorMessage name="email">
                {(msg) => <div style={{ color: "red", fontSize: "12px" }}>{msg}</div>}
              </ErrorMessage>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: "10px 20px",
                backgroundColor: "#0078D4",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Download
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
