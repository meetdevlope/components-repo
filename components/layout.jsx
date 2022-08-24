import { useRouter } from "next/router";
import React from "react";
import ButtonComponent from "./Button";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div>
      {children}
      <div className="flex justify-center items-center">
        <ButtonComponent
          buttonText="Home"
          appearance={"sec-out"}
          onClick={() => router.push("/")}
        />
      </div>
    </div>
  );
};

export default Layout;
