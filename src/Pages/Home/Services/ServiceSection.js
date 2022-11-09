import React from "react";

const ServiceSection = ({ serviceDetails }) => {
  const { _id, service_id, title, img, price, description } = serviceDetails;

  return (
    <div>
      <div>
        <img src={img} alt=""></img>
      </div>
      <div>
        <p className="text-4xl font-bold mt-6">{title}</p>
        <p className="text-2xl font-semibold mt-2">Price : ${price}</p>
        <p className="mt-5">{description}</p>
      </div>
      <div className="mt-8"></div>
    </div>
  );
};

export default ServiceSection;
