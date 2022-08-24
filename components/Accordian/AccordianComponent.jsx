import React from "react";
import AccordianInd from "./AccordianInd";
import data from "./AccordianData.json";

const AccordianComponent = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="mb-10">Frequently Asked Questions</h2>
      <div className="w-full [&>*:last-child>div:last-child]:hidden">
        {data.map((que, i) => (
          <AccordianInd que={que} key={i} />
        ))}
      </div>
    </div>
  );
};

export default AccordianComponent;
