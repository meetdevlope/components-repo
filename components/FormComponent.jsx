import { Formik, Form } from "formik";
import React from "react";
import Button from "./Button";

const FormComponent = ({ formFields, initialValues }) => {
  const submitAction = (values) => {
    console.log(values);
  };
  return (
    <div className="bg-pri flex-1 p-10 text-white rounded-xl">
      <Formik onSubmit={submitAction} initialValues={initialValues}>
        {({ values, handleChange }) => (
          <Form className="flex flex-col gap-6 ">
            {formFields.map((form, idx) => (
              <div
                key={idx}
                className={`flex ${
                  form.inputType === "checkbox"
                    ? "flex-row gap-4 items-center"
                    : "flex-col"
                }`}
              >
                {form.label && (
                  <label htmlFor={form.inputName}>{form.label}</label>
                )}
                {form.inputType === "selectOption" ? (
                  <select
                    name={form.inputName}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    className="border bg-[transparent] mt-2 p-1 focus:outline-none placeholder:text-white"
                  >
                    {form.placeholder && (
                      <option className="bg-pri">{form.placeholder}</option>
                    )}
                    {form.options.map((option, idx) => (
                      <option key={idx} value={option.value} className="bg-pri">
                        {option.text}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={form.inputType}
                    placeholder={form.placeholder}
                    name={form.inputName}
                    value={values.inputName}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    className={`bg-[transparent] focus:outline-none placeholder:text-white ${
                      form.inputType === "file" ? "border-none" : "border-b "
                    }`}
                  />
                )}
              </div>
            ))}

            <Button
              appearance={"sec"}
              buttonClass="self-center"
              buttonText="Submit"
              type="submit"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormComponent;

{
  /* <textarea
placeholder={form.placeholder}
id=""
rows="5"
name={form.inputName}
value={values.inputName}
onChange={(e) => {
  handleChange(e);
}}
className="border bg-[transparent] mt-2 p-1 focus:outline-none placeholder:text-white"
></textarea> */
}
