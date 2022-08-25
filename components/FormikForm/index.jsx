import { Field, Form, Formik, ErrorMessage } from "formik";
import React from "react";
import TextError from "./TextError";

const FormikForm = ({ fields, action, ...props }) => {
  return (
    <Formik {...props}>
      {() => {
        return (
          <Form className="flex flex-col gap-4">
            {fields.map((x, id) => (
              <>
                <Field key={id} {...x} />
                <ErrorMessage name={x.name} component={<TextError />} />
              </>
            ))}
            {action()}
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikForm;
