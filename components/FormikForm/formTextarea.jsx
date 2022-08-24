import React from "react";

const FormTextarea = ({ label, id, field, icon, ...props }) => {
  return (
    <div className={"flex flex-col"}>
      {{ label } && <label>{label}</label>}
      <div>
        {icon}
        <textarea
          id={id}
          rows="5"
          {...props}
          {...field}
          className="border bg-[transparent] mt-2 w-full p-1 focus:outline-none placeholder:text-white"
        ></textarea>
      </div>
    </div>
  );
};

export default FormTextarea;
