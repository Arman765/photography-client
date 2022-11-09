import React from "react";
import { useLoaderData } from "react-router-dom";
import ReviewSection from "./ReviewSection";
import ServiceSection from "./ServiceSection";

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();

  //   console.log(serviceDetails);
  return (
    <div>
      <ServiceSection serviceDetails={serviceDetails}></ServiceSection>
      <ReviewSection serviceDetails={serviceDetails}></ReviewSection>
    </div>
  );
};

export default ServiceDetails;
