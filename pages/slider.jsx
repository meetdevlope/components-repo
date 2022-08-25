import React, { useState } from "react";
import Slider1 from "../components/Slider/Slider1";
import Slider2 from "../components/Slider/Slider2";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Slider = () => {
  const slider1Images = [
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
  ];

  const slider2Images = [
    {
      image:
        "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/samsung-logo.png",
    },
    {
      image:
        "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/google-logo.png",
    },
    {
      image:
        "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/microsoft-logo.png",
    },
    {
      image:
        "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/oracle-logo.png",
    },
    {
      image:
        "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/ibm-logo.png",
    },
    {
      image:
        "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/visa-logo.png",
    },
  ];

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight fill="black" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft fill="black" />
      </div>
    );
  };

  const [testiIndex, setTestiIndex] = useState(0);

  return (
    <div className="flex flex-col mt-6 gap-12">
      <h2 className="vt">Variant 1</h2>
      <Slider1
        images={slider1Images}
        settings={{
          infinite: true,
          lazyLoad: true,
          speed: 300,
          dots: true,
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
        }}
      />
      <h2 className="vt">Variant 2</h2>
      <Slider2
        images={slider2Images}
        settings={{
          speed: 4000,
          autoplay: true,
          autoplaySpeed: 0,
          cssEase: "linear",
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          swipeToSlide: true,
          centerMode: true,
          focusOnSelect: true,
          beforeChange: (current, next) => setTestiIndex(next),
          responsive: [
            {
              breakpoint: 801,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              },
            },
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              },
            },
          ],
        }}
      />
    </div>
  );
};

export default Slider;
