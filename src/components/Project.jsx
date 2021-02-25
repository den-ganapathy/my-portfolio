import React from "react";
import { ProtfolioProjectWrap } from "../styles/projectStyles";
import project1 from "./../images/project1.png";
import project2 from "./../images/project2.png";

const projectData = [
  { id: 1, img: project1, name: "Restaurent Menu" },
  { id: 2, img: project2, name: "Portfolio" },
];
const Project = () => {
  return (
    <ProtfolioProjectWrap>
      <div className="project-header">Projects</div>
      <div className="project">
        {projectData &&
          projectData.map((data) => {
            const { id, img, name } = data;
            return (
              <div key={id} alt="" className="project-container">
                <img src={img} alt=""></img>
                <p>
                  <span>{name}</span>
                  <button> View</button>
                </p>
              </div>
            );
          })}
      </div>
    </ProtfolioProjectWrap>
  );
};

export default Project;
