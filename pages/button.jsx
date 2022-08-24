import React from "react";
import ButtonComponent from "../components/Button";

const Button = () => {
  return (
    <div>
      <h2 className="vt">pri</h2>
      <ButtonComponent />
      <h2 className="vt">pri-out</h2>
      <ButtonComponent appearance={"pri-out"} />
      <h2 className="vt">sec</h2>
      <ButtonComponent appearance={"sec"} />
      <h2 className="vt">sec-out</h2>
      <ButtonComponent appearance={"sec-out"} />
    </div>
  );
};

export default Button;
