import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceItem = ({ service }) => {
  const { _id, service_id, title, img, price, description } = service;

  return (
    <PhotoProvider>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <PhotoView src={img}>
            <img src={img} alt="" />
          </PhotoView>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description.slice(0, 99)} . . .</p>
          <p>Price : ${price}</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
};

export default ServiceItem;
