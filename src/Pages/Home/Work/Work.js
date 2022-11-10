import React from "react";
import img1 from "../../../assets/work/laliga.png";
import img2 from "../../../assets/work/bundesliga.png";
import img3 from "../../../assets/work/l1.png";
import img4 from "../../../assets/work/seria.png";
import img5 from "../../../assets/work/espn.jpg";
import img6 from "../../../assets/work/epl.png";

const Work = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div>
      <p className="text-4xl font-bold text-center mt-12">I Worked For!</p>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
        {images.map((image, _index) => (
          <div key={_index} className="flex justify-center">
            <img className="mask mask-circle w-1/2 h-1/2 " src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
