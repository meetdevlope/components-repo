import React from "react";
import FormComponent from "../components/FormComponent";

const Form = () => {
  const formFields = [
    { label: "First Name", inputType: "text", inputName: "firstName" },
    { label: "Email", inputType: "email", inputName: "email" },
    {
      placeholder: "Phone Number",
      inputType: "number",
      inputName: "phoneNumber",
    },
    {
      label: "Select Option",
      inputType: "selectOption",
      inputName: "selectOption",
      options: [
        {
          text: "Option 1",
          value: "option1",
        },
        {
          text: "Option 2",
          value: "option2",
        },
        {
          text: "Option 3",
          value: "option3",
        },
      ],
    },
    { label: "Choose File", inputType: "file", inputName: "chooseFile" },
    {
      label: "I accept the terms and conditions",
      inputType: "checkbox",
      inputName: "termsAndConditions",
    },
  ];
  const initialValues = {
    firstName: "",
    email: "",
    phoneNumber: "",
    selectOption: "option1",
    chooseFile: "",
    termsAndConditions: false,
  };

  return (
    <div className="p-8">
      <FormComponent formFields={formFields} initialValues={initialValues} />
    </div>
  );
};

export default Form;
