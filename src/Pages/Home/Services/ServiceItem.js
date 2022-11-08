import React from "react";

const ServiceItem = ({ service }) => {
  const { _id, service_id, title, img, price, description } = service;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0, 99)}...</p>
        <p>Price : ${price}</p>
        <div className="card-actions justify-start">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
