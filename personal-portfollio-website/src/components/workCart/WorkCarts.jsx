import "../workCart/WorkCarts.css";
import pro1 from "../../assets/login.jpg";

import React from "react";
import { NavLink } from "react-router-dom";

const WorkCarts = (props) => {
  return (
    // <div className="work-container">
    //   <h1 className="project-heading"> projects </h1>
    //   <div className="project-container">
    //     <div className="project-card">
    //       <img src={pro1} alt="" />
    //       <h2 className="project-title">project Title</h2>
    //       <div className="pro-details">
    //         <p>this is details</p>
    //         <div className="pro-btns">
    //           <NavLink
    //             to="https://gym-website-d3dk.onrender.com"
    //             className="btn"
    //           >
    //             view
    //           </NavLink>
    //           <NavLink
    //             to="https://github.com/samruddhi1402/Gym-Website-Project-Room-10.git"
    //             className="btn"
    //           >
    //             source
    //           </NavLink>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="project-card">
    <img src={props.imgsrc} alt="" />
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
      <p>{props.text}</p>
      <div className="pro-btns">
        <NavLink
          to={props.view}
          className="btn"
        >
          view
        </NavLink>
        <NavLink
          to={props.source}
          className="btn"
        >
          source
        </NavLink>
      </div>
    </div>
  </div>
  );
};

export default WorkCarts;
