import React from "react";
import { ProtfolioEducationWrap } from "../styles/educationStyles";
import tap from "./../images/tap2.gif";
import collegeImg from "./../images/college3.png";

const educationData = [
  {
    id: 1,
    name: "Master of Computer Applications",
    year: "Jun 2020",
    college: "R V College of Engineering, Bangalore",
    percentage: "8.24 CGPA",
  },
  {
    id: 2,
    name: "Bachelor of Computer Applications",
    year: "May 2018",
    college: "St. Philomena College, Puttur",
    percentage: "77.7 %",
  },
  {
    id: 3,
    name: "12th Standard",
    year: "Mar 2015",
    college: "Sadvidya College, Mysore",
    percentage: "70 %",
  },
  {
    id: 4,
    name: "10th Standard",
    year: "Apr 2013",
    college: "J C High School, Kodagu",
    percentage: "85.6 %",
  },
];

const Education = () => {
  return (
    <ProtfolioEducationWrap>
      <div className="education-header">Education</div>
      <div className="education-container">
        {educationData &&
          educationData.map((data) => {
            const { id, name, year, college, percentage } = data;
            return (
              <div key={id} className="education-container-item">
                <div key={id} className="education-container-item-sections">
                  <article className="education-container-item-sections-front">
                    <img className="collegeImg" src={collegeImg} alt=""></img>
                    <p className="name">{name}</p>
                    <img src={tap} alt=""></img>
                    <p className="click">Tap To View</p>
                  </article>
                  <article className="education-container-item-sections-back">
                    <div className="year">
                      Passing Year
                      <p>{year}</p>
                    </div>
                    <div className="college">
                      College
                      <p>{college}</p>
                    </div>
                    <div className="percentage">
                      Percentage
                      <p>{percentage}</p>
                    </div>
                  </article>
                </div>
              </div>
            );
          })}
      </div>
    </ProtfolioEducationWrap>
  );
};

export default Education;
