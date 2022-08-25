import { useMemo, useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

const Slider1 = ({ settings, images }) => {
  return (
    <>
      <div className="flex flex-col w-full mx-auto overflow-hidden">
        <div className="w-full mx-auto">
          <Slider {...settings}>
            {images.map((image, idx) => (
              <div
                key={idx}
                className="image-container flex justify-center tab:w-full gap-4"
              >
                <Image
                  className="imageC"
                  src={image.image}
                  // layout="fill"
                  // objectFit="contain"
                  height="200"
                  width="200"
                  alt="image"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );

  // return (
  //   <>
  //     <div className="flex flex-col max-w-7xl mx-auto">
  //       <div className="">
  //         <Slider {...settings}>
  //           {logos.map((image, idx) => (
  //             <div key={idx} className="hello">
  //               <div className="flex justify-center mx-0 tab:mx-6">
  //                 <Image src={image.image} height="150" width="150" />
  //               </div>
  //             </div>
  //           ))}
  //         </Slider>
  //       </div>
  //     </div>
  //   </>
  // );
};

export default Slider1;
