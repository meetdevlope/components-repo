import { useMemo, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

const Slider1 = ({ settings, images }) => {
  // const settings = () => ({});

  return (
    <>
      <div className="flex flex-col w-full mx-auto">
        <div className="w-full mx-auto">
          <Slider {...settings}>
            {images.map((image, idx) => (
              <div
                key={idx}
                className="image-container  flex justify-center relative h-56 tab:h-96 tab:w-full gap-5"
              >
                <Image
                  className="imageC"
                  src={image.img}
                  layout="fill"
                  objectFit="contain"
                  alt="image"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Slider1;
