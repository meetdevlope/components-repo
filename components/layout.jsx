import { useRouter } from "next/router";
import React from "react";
import ButtonComponent from "./Button";
import Header from "./Header";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div>
      <Header />
      {children}
      <div className="flex justify-center items-center mt-20">
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
