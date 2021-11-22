import React from "react";
import { ProtfolioProjectWrap } from "../styles/projectStyles";
import projectQuiz from "./../images/projectQuiz.png";
import project2 from "./../images/project1.png";
import project3 from "./../images/project2.png";
import project1 from "./../images/project3.png";

const projectData = [
  {
    id: 1,
    img: projectQuiz,
    name: "Quizilicious - Quiz app",
    url: "https://restaurant-menu-mern.herokuapp.com/",
    gitlink: "",
  },
  {
    id: 2,
    img: project1,
    name: "Login With Authentication",
    url: "https://restaurant-menu-mern.herokuapp.com/",
    gitlink: "",
  },
  {
    id: 3,
    img: project2,
    name: "Restaurent Menu",
    url: "https://restaurant-menu-mern.herokuapp.com/",
    gitlink: "",
  },
];
const Project = () => {
  const gotoLink = (url) => {
    window.open(url);
  };

  return (
    <ProtfolioProjectWrap>
      <div className="project-header">Projects</div>
      <div className="project">
        {projectData &&
          projectData.map((data) => {
            const { id, img, name, url } = data;
            return (
              <div key={id} alt="" className="project-container">
                <img src={img} alt=""></img>
                <p>
                  <span>{name}</span>
                  <div className="buttons">
                    <button className="button1" onClick={() => gotoLink(url)}>
                      {" "}
                      Open Project
                    </button>
                    <button className="button2" onClick={() => gotoLink(url)}>
                      {" "}
                      View Source code
                    </button>
                  </div>
                </p>
              </div>
            );
          })}
      </div>
    </ProtfolioProjectWrap>
  );
};

export default Project;
