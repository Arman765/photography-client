import React from "react";
import useTitle from "../../../Hooks/Hooks/useTitle";
import Carousal from "../Carousal/Carousal";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Work from "../Work/Work";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Carousal></Carousal>

      <Services></Services>
      <hr></hr>
      <Work></Work>
      <hr></hr>
      <Contact></Contact>
    </div>
  );
};

export default Home;
