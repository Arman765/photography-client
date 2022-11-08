import React from "react";
import "./Carousal.css";

const CarousalItem = ({ item }) => {
  const { id, prev, next, image } = item;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="img-gradient mx-auto">
        <img src={image} alt="" className="w-full rounded-xl" />
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2 left-12  top-1/4">
        <h1 className="text-5xl font-bold text-white">
          High Maintenence, <br></br>
          High Price, <br></br>
          Low Quality,
          <br></br>
          We dont do it here!
        </h1>
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-12  top-1/2">
        <p className="text-xl font-bold text-white">
          This is a sports related servicing place. Here every kind of sports
          related servicing can be solved.
        </p>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-12 top-10">
        <a href={`#slide${prev}`} className="btn btn-circle mr-3">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default CarousalItem;
