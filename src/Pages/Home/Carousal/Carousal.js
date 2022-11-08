import React from "react";
import img1 from "../../../assets/carousal/Pepsi.jpg";
import img2 from "../../../assets/carousal/kick.jpg";
import img3 from "../../../assets/carousal/trophy.jpg";
import img4 from "../../../assets/carousal/benz.jpeg";
import CarousalItem from "./CarousalItem";

const Carousal = () => {
  const carousalData = [
    {
      image: img1,
      prev: 4,
      id: 1,
      next: 2,
    },
    {
      image: img2,
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      image: img3,
      prev: 2,
      id: 3,
      next: 4,
    },
    {
      image: img4,
      prev: 3,
      id: 4,
      next: 1,
    },
  ];

  return (
    <div className="carousel w-full">
      {/* <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div> */}
      {carousalData.map((item) => (
        <CarousalItem key={item.id} item={item}></CarousalItem>
      ))}
    </div>
  );
};

export default Carousal;
