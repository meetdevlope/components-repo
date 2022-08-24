import React from "react";

const FormDropdown = ({
  label,
  id,
  field,
  icon,
  placeholder,
  options,
  ...props
}) => {
  return (
    <div className={"flex flex-col"}>
      {{ label } && <label>{label}</label>}
      <div>
        {icon}
        <select
          {...field}
          {...props}
          className="border bg-[transparent] w-full mt-2 p-1 focus:outline-none placeholder:text-white"
        >
          {placeholder && <option className="bg-pri">{placeholder}</option>}
          {options.map((option, idx) => (
            <option key={idx} value={option.value} className="bg-pri">
              {option.text}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FormDropdown;
