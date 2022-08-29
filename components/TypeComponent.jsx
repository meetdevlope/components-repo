import React from "react";

import Typical from "react-typical";

const TypeComponent = () => {
  return (
    <div className="text-pri-light">
      <Typical
        steps={[
          "Influencers",
          1500,
          "Freelancers",
          1500,
          "Suppliers",
          1500,
          "Creators",
          1500,
          "Developers",
          1500,
          "Affiliates",
          1500,
        ]}
        loop={Infinity}
        wrapper="b"
      />
    </div>
  );
};

export default TypeComponent;
