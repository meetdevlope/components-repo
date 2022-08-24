import React from "react";
import NewsletterComponent from "../components/NewsletterComponent";

const Newsletter = () => {
  return (
    <div>
      <h2 className="vt">Variant 1</h2>
      <NewsletterComponent />
      <h2 className="vt">Variant 2</h2>
      <NewsletterComponent variant="2" />
    </div>
  );
};

export default Newsletter;
