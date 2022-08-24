import React from "react";
import cn from "classnames";

const FormInput = ({
  label,
  id,
  field,
  wrapperClass,
  labelClass,
  inputClass,
  icon,
  type,
  ...props
}) => {
  return (
    <div
      className={cn(
        `flex ${
          type === "checkbox" || type === "radio"
            ? "flex-row gap-4 items-center"
            : "flex-col"
        } `,
        {
          [wrapperClass]: !!wrapperClass,
        }
      )}
    >
      {{ label } && (
        <label className={cn({ [labelClass]: !!labelClass })}>{label}</label>
      )}
      <div>
        {icon}
        <input
          id={id}
          {...props}
          {...field}
          type={type}
          className={cn(
            `bg-[transparent] w-full focus:outline-none placeholder:text-white ${
              type === "file" ? "border-none" : "border-b "
            }`,
            {
              [inputClass]: !!inputClass,
            }
          )}
        />
      </div>
    </div>
  );
};

export default FormInput;
