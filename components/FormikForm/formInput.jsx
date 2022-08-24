import React from "react";

const FormInput = ({ label, id, field, icon, type, ...props }) => {
  return (
    <div
      className={`flex ${
        type === "checkbox" || type === "radio"
          ? "flex-row gap-4 items-center"
          : "flex-col"
      } `}
    >
      {{ label } && <label>{label}</label>}
      <div>
        {icon}
        <input
          id={id}
          {...props}
          {...field}
          type={type}
          className={`bg-[transparent] w-full focus:outline-none placeholder:text-white ${
            type === "file" ? "border-none" : "border-b "
          }`}
        />
      </div>
    </div>
  );
};

export default FormInput;
