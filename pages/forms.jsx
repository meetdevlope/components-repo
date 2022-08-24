import React from "react";
import ButtonComponent from "../components/Button";
import FormikForm from "../components/FormikForm";
import FormInput from "../components/FormikForm/formInput";
import FormRadio from "../components/FormikForm/formRadio";
import FormDropdown from "../components/FormikForm/formDropdown";
import FormTextarea from "../components/FormikForm/formTextarea";
import SearchBar from "../components/Searchbar";

const Forms = () => {
  const submitAction = (values) => {
    console.log(values);
  };
  return (
    <>
      <div className="bg-pri flex-1 p-10 text-white rounded-xl m-10">
        <FormikForm
          initialValues={{
            firstName: "",
            email: "",
            phoneNumber: "",
            message: "",
            selectDropdown: "dropdown1",
            chooseFile: "",
            selectRadio: "",
            termsAndConditions: false,
          }}
          onSubmit={submitAction}
          fields={[
            {
              label: "First Name",
              type: "text",
              name: "firstName",
              component: FormInput,
            },
            {
              label: "Email",
              type: "email",
              name: "email",
              component: FormInput,
            },
            {
              type: "number",
              name: "phoneNumber",
              placeholder: "Phone Number",
              component: FormInput,
            },
            {
              name: "message",
              placeholder: "Enter Message Here",
              component: FormTextarea,
            },
            {
              label: "Select Dropdown",
              name: "selectDropdown",
              component: FormDropdown,
              options: [
                {
                  text: "Dropdown 1",
                  value: "dropdown1",
                },
                {
                  text: "Dropdown 2",
                  value: "dropdown2",
                },
                {
                  text: "Dropdown 3",
                  value: "dropdown3",
                },
              ],
            },
            {
              label: "Choose File",
              type: "file",
              name: "chooseFile",
              component: FormInput,
            },
            {
              label: "Select Radio",
              name: "selectRadio",
              component: FormRadio,
              options: [
                {
                  text: "Radio 1",
                  value: "radio1",
                },
                {
                  text: "Radio 2",
                  value: "radio2",
                },
                {
                  text: "Radio 3",
                  value: "radio3",
                },
              ],
            },
            {
              label: "I accept the Terms and Conditions",
              type: "checkbox",
              name: "termsAndConditions",
              component: FormInput,
            },
          ]}
          action={() => (
            <ButtonComponent
              appearance={"sec"}
              buttonText="Submit"
              type="submit"
              buttonClass="self-center"
            />
          )}
        />

        <SearchBar
          placeholder={"Search"}
          searchClass={"placeholder:text-white"}
          action={
            <ButtonComponent
              appearance={"sec"}
              buttonText={"Search"}
              type={"submit"}
              buttonClass={"rounded-full ml-4"}
            />
          }
        />
      </div>
    </>
  );
};

export default Forms;
