import React from "react";
import cn from "classnames";

const FormDropdown = ({
  label,
  id,
  field,
  icon,
  wrapperClass,
  labelClass,
  inputClass,
  optionsClass,
  placeholder,
  options,
  ...props
}) => {
  return (
    <div
      className={cn("flex flex-col", {
        [wrapperClass]: !!wrapperClass,
      })}
    >
      {{ label } && (
        <label className={cn({ [labelClass]: !!labelClass })}>{label}</label>
      )}
      <div>
        {icon}
        <select
          {...field}
          {...props}
          className={cn(
            "border bg-[transparent] w-full mt-2 p-1 focus:outline-none placeholder:text-white",
            {
              [inputClass]: !!inputClass,
            }
          )}
        >
          {placeholder && (
            <option
              className={cn("bg-pri", {
                [optionsClass]: !!optionsClass,
              })}
            >
              {placeholder}
            </option>
          )}
          {options.map((option, idx) => (
            <option
              key={idx}
              value={option.value}
              className={cn("bg-pri", {
                [optionsClass]: !!optionsClass,
              })}
            >
              {option.text}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FormDropdown;
