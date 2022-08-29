import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import ButtonComponent from "./Button";

const Header = () => {
  const [hamOpen, sethamOpen] = useState(false);

  const OpenHamburger = () => {
    sethamOpen((prev) => !prev);
  };

  const [stiHeader, setstiHeader] = useState(false);

  const stickyHeader = () => {
    window.scrollY >= 5 ? setstiHeader(true) : setstiHeader(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyHeader);
  }, []);

  const navLinks = [
    { label: "Home", link: "/" },
    { label: "Buttons", link: "/button" },
    { label: "Accordian", link: "/accordian" },
    { label: "Footer", link: "/footer" },
  ];

  const router = useRouter();

  return (
    <header
      className={`py-2 tab:py-6 z-[1] ${
        stiHeader
          ? "sticky top-0 bg-pri-light transition-all duration-200"
          : null
      } flex justify-between items-center`}
    >
      <div className="h-8 w-24 relative">
        <Image
          src={
            "https://cdn.freebiesupply.com/logos/large/2x/nike-4-logo-svg-vector.svg"
          }
          layout="fill"
          objectFit="cover"
          objectPosition={"center"}
          alt="logo"
        />
      </div>

      <div className="tab:flex tab:justify-center tab:items-center tab:gap-4 hidden">
        {navLinks.map((navLink, i) => (
          <a
            className="hover:text-pri-dark transition-all cursor-pointer"
            onClick={() => router.push(navLink.link)}
            key={i}
          >
            {navLink.label}
          </a>
        ))}

        <ButtonComponent buttonText="Log In" appearance={"sec-out"} />
        <ButtonComponent buttonText="Sign Up" appearance={"pri"} />
      </div>

      <svg
        className={`ham ham8 tab:hidden z-50 mr-3 fill-[none] stroke-black ${
          hamOpen ? "rotate-45" : null
        }`}
        onClick={OpenHamburger}
        viewBox="0 0 100 100"
        width="60"
        style={{ strokeWidth: "5.5", strokeLinecap: "round" }}
      >
        <path
          className="line top transition-all duration-300"
          d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
          style={
            hamOpen
              ? { strokeDashoffset: "-64", strokeDasharray: "40 160" }
              : { strokeDasharray: "40 160" }
          }
        />
        <path
          className="line middle transition-all duration-300"
          d="m 30,50 h 40"
          style={
            hamOpen
              ? {
                  rotate: "90deg",
                  strokeDasharray: "40 142",
                  transformOrigin: "50%",
                }
              : { strokeDasharray: "40 142", transformOrigin: "50%" }
          }
        />
        <path
          className="line bottom transition-all duration-300"
          d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
          style={
            hamOpen
              ? {
                  strokeDashoffset: "-64",
                  strokeDasharray: "40 85",
                  transformOrigin: "50%",
                }
              : { strokeDasharray: "40 85", transformOrigin: "50%" }
          }
        />
      </svg>

      <div
        className={`fixed top-0 left-0 h-screen w-screen bg-black opacity-80 transition-all duration-300 tab:hidden ${
          hamOpen ? "block" : "hidden"
        }`}
      ></div>
      <div
        className={`${
          hamOpen ? "translate-x-0" : "translate-x-full"
        } tab:translate-x-full transition-all fixed right-0 top-0 bg-white px-10 h-screen w-64 flex justify-center items-start flex-col gap-4 z-10`}
      >
        {navLinks.map((navLink, i) => (
          <a
            className="hover:text-pri-dark transition-all flex justify-between w-full"
            key={i}
            onClick={() => {
              router.push(navLink.link);
              sethamOpen(false);
            }}
          >
            {navLink.label}
          </a>
        ))}

        <ButtonComponent buttonText="Log In" appearance={"sec-out"} />
        <ButtonComponent buttonText="Sign Up" appearance={"pri"} />
      </div>
    </header>
  );
};

export default Header;
