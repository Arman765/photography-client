import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../Hooks/Hooks/useTitle";
import ServiceItem from "./ServiceItem";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://sports-photographer-server-beta.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mb-10">
      <div className="text-center mb-10 mt-10">
        <p className="text-4xl font-bold"> Services</p>
        <p className="text-2xl font-bold">
          These are the services i give.As a professional i do my work very
          sicerely and professionally
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-6">
        {services.map((service) => (
          <ServiceItem key={service._id} service={service}></ServiceItem>
        ))}
      </div>
      <div className="flex justify-center">
        <div className=" mt-10">
          <Link to="/allservices" className="btn btn-active btn-primary">
            See All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
