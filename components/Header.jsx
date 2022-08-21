import Image from "next/image";
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
        { label: "Home", link: "#" },
        { label: "Services", link: "#" },
        { label: "About Us", link: "#" },
        { label: "Contact Us", link: "#" },
    ];

    return (
        <header
            className={`px-8 py-2 tab:px-28 tab:py-8 ${stiHeader
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
                    <a className="hover:text-pri-dark" href={navLink.link} key={i} >{navLink.label}</a>
                ))}
                {/* <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">About Us</a>
                <a href="#" className="mr-8">
                    Contact Us
                </a> */}

                <ButtonComponent buttonText="Log In" appearance={"sec-out"} />
                <ButtonComponent buttonText="Sign Up" appearance={"pri"} />
            </div>

            <svg
                className={`ham hamRotate ham8 tab:hidden z-50 ${hamOpen ? "active" : null
                    }`}
                onClick={OpenHamburger}
                viewBox="0 0 100 100"
                width="60"
            >
                <path
                    className="line top"
                    d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
                />
                <path className="line middle" d="m 30,50 h 40" />
                <path
                    className="line bottom"
                    d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
                />
            </svg>

            <div
                className={`${hamOpen ? "translate-x-0" : "translate-x-full"
                    } tab:translate-x-full transition-all fixed right-0 top-0 bg-white px-10 h-screen w-64 flex justify-center items-start flex-col gap-4`}
            >
                <a href="#" className="flex justify-between w-full">
                    Home <span>></span>
                </a>
                <a href="#" className="flex justify-between w-full">
                    Services <span>></span>
                </a>
                <a href="#" className="flex justify-between w-full">
                    About Us <span>></span>
                </a>
                <a href="#" className="flex justify-between w-full mb-10">
                    Contact Us <span>></span>
                </a>

                <ButtonComponent buttonText="Log In" appearance={"sec-out"} />
                <ButtonComponent buttonText="Sign Up" appearance={"pri"} />
            </div>
        </header>
    );
};

export default Header;
