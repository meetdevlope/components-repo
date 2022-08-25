import { useMemo, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

<<<<<<< Updated upstream
const Slider1 = ({ settings, images }) => {
  // const settings = () => ({});
=======
const Slider1 = ({ data }) => {
  const images = useMemo(
    () => [
      {
        img: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        img: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        img: "https://images.unsplash.com/photo-1490078937122-2fe6a2a30324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        img: "https://images.unsplash.com/photo-1515896769750-31548aa180ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80",
      },
      {
        img: "https://images.unsplash.com/photo-1491964247380-4f630fb757c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
    ],
    []
  );
  const NextArrow = ({ onClick }) => {
    return (
      <div className="absolute top-1/2 right-0" onClick={onClick}>
        <FaArrowRight fill="black" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="absolute top-1/2 left-0" onClick={onClick}>
        <FaArrowLeft fill="black" />
      </div>
    );
  };

  const [testiIndex, setTestiIndex] = useState(0);

  const settings = useMemo(() => ({
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setTestiIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  }));
>>>>>>> Stashed changes

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
