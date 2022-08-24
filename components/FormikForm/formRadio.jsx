import React from "react";

const FormRadio = ({
  label,
  id,
  field,
  form: { setFieldValue },
  icon,
  options,
  ...props
}) => {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <div className="flex gap-8 items-center">
        {icon}
        {options.map((option, id) => (
          <div key={id}>
            <input
              {...field}
              {...props}
              type="radio"
              onChange={() => {
                setFieldValue(field.name, option.value, true);
              }}
              id={id}
            />
            <span className="ml-2">{option.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormRadio;
