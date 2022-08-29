import React, { useState } from "react";

const HamburgerSVGs = () => {
  const [hamOpen, sethamOpen] = useState(false);

  const OpenHamburger = () => {
    sethamOpen((val) => !val);
  };

  return (
    <div className="flex justify-center items-center">
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

      <svg
        className={`ham2 fill-[none] tab:hidden stroke-black transition-all duration-300 ${
          hamOpen ? "rotate-45" : null
        }`}
        viewBox="0 0 100 100"
        width="60"
        style={{ strokeLinecap: "round", strokeWidth: "5" }}
        onClick={OpenHamburger}
      >
        <path
          className="line top transition-all duration-500"
          d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
          style={
            hamOpen
              ? { strokeDasharray: "40 139", strokeDashoffset: "-98" }
              : { strokeDasharray: "40 139" }
          }
        />
        <path
          className="line middle transition-all duration-500"
          d="m 30,50 h 40"
        />
        <path
          className="line bottom transition-all duration-500"
          d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
          style={
            hamOpen
              ? { strokeDasharray: "40 180", strokeDashoffset: "-138" }
              : { strokeDasharray: "40 180" }
          }
        />
      </svg>

      <svg
        className="ham ham2 fill-[none] stroke-black tab:hidden"
        viewBox="0 0 100 100"
        width="60"
        style={{ strokeLinecap: "round", strokeWidth: "5" }}
        onClick={OpenHamburger}
      >
        <path
          className="line top transition-all duration-300"
          d="m 70,33 h -40 c -6.5909,0 -7.763966,-4.501509 -7.763966,-7.511428 0,-4.721448 3.376452,-9.583771 13.876919,-9.583771 14.786182,0 11.409257,14.896182 9.596449,21.970818 -1.812808,7.074636 -15.709402,12.124381 -15.709402,12.124381"
          style={
            hamOpen
              ? { strokeDasharray: "40 121", strokeDashoffset: "-102px" }
              : { strokeDasharray: "40 121" }
          }
        />
        <path className="line middle" d="m 30,50 h 40" />
        <path
          className="line bottom transition-all duration-300"
          d="m 70,67 h -40 c -6.5909,0 -7.763966,4.501509 -7.763966,7.511428 0,4.721448 3.376452,9.583771 13.876919,9.583771 14.786182,0 11.409257,-14.896182 9.596449,-21.970818 -1.812808,-7.074636 -15.709402,-12.124381 -15.709402,-12.124381"
          style={
            hamOpen
              ? { strokeDasharray: "40 121", strokeDashoffset: "-102px" }
              : { strokeDasharray: "40 121" }
          }
        />
      </svg>

      <svg
        className={`ham ham5 fill-[none] tab:hidden stroke-black transition-all duration-300 ${
          hamOpen ? "rotate-180" : null
        }`}
        style={{ strokeWidth: "5", strokeLinecap: "round" }}
        viewBox="0 0 100 100"
        width="60"
        onClick={OpenHamburger}
      >
        <path
          className="line top transition-all duration-300"
          d="m 30,33 h 40 c 0,0 8.5,-0.68551 8.5,10.375 0,8.292653 -6.122707,9.002293 -8.5,6.625 l -11.071429,-11.071429"
          style={
            hamOpen
              ? { strokeDasharray: "14 82", strokeDashoffset: "-72" }
              : { strokeDasharray: "40 82" }
          }
        />
        <path className="line middle" d="m 70,50 h -40" />
        <path
          className="line bottom transition-all duration-300"
          d="m 30,67 h 40 c 0,0 8.5,0.68551 8.5,-10.375 0,-8.292653 -6.122707,-9.002293 -8.5,-6.625 l -11.071429,11.071429"
          style={
            hamOpen
              ? { strokeDasharray: "14 82", strokeDashoffset: "-72" }
              : { strokeDasharray: "40 82" }
          }
        />
      </svg>

      <svg
        className="ham ham6 fill-[none] tab:hidden stroke-black"
        viewBox="0 0 100 100"
        width="60"
        style={{ strokeWidth: "5", strokeLinecap: "round" }}
        onClick={OpenHamburger}
      >
        <path
          className="line top transition-all duration-300"
          d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
          style={
            hamOpen
              ? { strokeDasharray: "40 172", strokeDashoffset: "-132" }
              : { strokeDasharray: "40 172" }
          }
        />
        <path
          className="line middle transition-all duration-300"
          d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
          style={
            hamOpen
              ? { strokeDasharray: "40 111", strokeDashoffset: "-71" }
              : { strokeDasharray: "40 111" }
          }
        />
        <path
          className="line bottom transition-all duration-300"
          d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
          style={
            hamOpen
              ? { strokeDasharray: "40 172", strokeDashoffset: "-132" }
              : { strokeDasharray: "40 172" }
          }
        />
      </svg>
    </div>
  );
};

export default HamburgerSVGs;
