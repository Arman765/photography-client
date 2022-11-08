import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceItem from "./ServiceItem";

const AllServices = () => {
  const allServices = useLoaderData();
  console.log(allServices);
  return (
    <div className="mb-10">
      <div className="text-center mb-10 mt-10">
        <p className="text-2xl font-bold"> Services</p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-6">
        {allServices.map((service) => (
          <ServiceItem key={service._id} service={service}></ServiceItem>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
