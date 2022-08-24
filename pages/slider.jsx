import React from "react";
import Slider1 from "../components/Slider/Slider1";
import Slider2 from "../components/Slider/Slider2";

const Slider = () => {
  return (
    <div className="flex flex-col mt-6 gap-12">
      <Slider1 />
      <Slider2 />
    </div>
  );
};

export default Slider;
