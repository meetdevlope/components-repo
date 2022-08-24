import React from "react";
import ButtonComponent from "./Button";

const NewsletterComponent = ({ variant }) => {
  if (variant === "1") {
    return (
      <div className="flex flex-col w-full justify-between items-center gap-4 tab:flex-row text-center tab:text-left">
        <div>
          <h3 className="mb-4">SUBSCRIBE TO OUR NEWSLETTER.</h3>
          <p>
            Get the latest news, articles, and resources in your inbox weekly.
          </p>
        </div>

        <div className="flex items-center tab:justify-end tab:w-full">
          <input
            type="email"
            placeholder="Email address"
            className="border border-gray outline-none p-2 pl-4 rounded-md grow max-w-md min-w-fit mr-4"
          />
          <ButtonComponent appearance={"pri"} buttonText="Subscribe" />
        </div>
      </div>
    );
  } else if (variant === "2") {
    return (
      <div className="flex flex-col items-start">
        <div>
          <h3 className="mb-4">SUBSCRIBE TO OUR NEWSLETTER.</h3>
          <p>
            Get the latest news, articles, and resources in your inbox weekly.
          </p>
        </div>

        <div className="mt-4 flex justify-center gap-4 flex-wrap">
          <input
            type="email"
            placeholder="Email address"
            className="border border-gray outline-none p-2 pl-4 rounded-md grow max-w-md min-w-fit mr-4"
          />
          <ButtonComponent appearance={"pri"} buttonText="Subscribe" />
        </div>
      </div>
    );
  }
};

export default NewsletterComponent;
