import React, { useState, useRef } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const AccordianInd = ({ que }) => {
  const ref = useRef(null);

  const [active, setfirst] = useState(false);
  const toggle = () => {
    setfirst((prev) => !prev);
  };
  return (
    <div className="max-w-2xl mx-auto">
      <div className="m-2 cursor-pointer py-2" onClick={() => toggle()}>
        <div className="flex justify-between items-center mx-auto">
          <h5>{que.question}</h5>
          <IoIosArrowDropdownCircle
            fontSize={"1.5rem"}
            className={`${
              active ? "rotate-180" : null
            } transition-all opacity-50`}
          />
        </div>
        <div
          className="transition-all duration-200 overflow-hidden"
          style={{
            height: `${active ? ref?.current?.scrollHeight + "px" : "0px"}`,
          }}
        >
          <h6 ref={ref} className="pt-4 opacity-50">
            {que.answer}
          </h6>
        </div>
      </div>
      <div className="bg-black h-px"></div>
    </div>
  );
};

export default AccordianInd;
