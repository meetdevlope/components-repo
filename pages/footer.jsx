import React from "react";
import FooterComponent from "../components/FooterComponent";

const Footer = () => {
  return (
    <div>
      <h2 className="vt">Variant 1</h2>
      <FooterComponent />
      <h2 className="vt">Variant 2</h2>
      <FooterComponent variant="2" />
    </div>
  );
};

export default Footer;
