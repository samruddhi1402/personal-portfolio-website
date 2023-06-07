import "../workCart/WorkCarts.css";
import "../heroImages/HeroimgStyles.css"

import WorkCarts from "./WorkCarts";
import workData from "./WorkData";

import React from "react";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading"> projects </h1>
      <div className="project-container">
        {workData.map((value, index) => {
          return (
            <WorkCarts
              key={index}
              imgsrc={value.imgsrc}
              title={value.title}
              text={value.text}
              view={value.view}
              source={value.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
