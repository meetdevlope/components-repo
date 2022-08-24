import { Field, Form, Formik } from "formik";
import React from "react";

const FormikForm = ({ fields, action, ...props }) => {
  return (
    <Formik {...props}>
      {() => {
        return (
          <Form className="flex flex-col gap-4">
            {fields.map((x, id) => (
              <Field key={id} {...x} />
            ))}
            {action()}
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikForm;
