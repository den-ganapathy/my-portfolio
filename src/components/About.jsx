import React from "react";
import { ProtfolioAboutWrap } from "../styles/aboutStyles";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import ganapathy from "./../images/gana.jpeg";

const About = () => {
  return (
    <ProtfolioAboutWrap>
      <div className="about">
        <div className="about-header">
          <img src={ganapathy} alt=""></img>
          <div className="about-header-name">Ganapathy S K</div>
          <div className="about-header-designation">Software Engineer</div>
        </div>
        <div className="about-contact1">
          <p>
            <span>Age : </span> &nbsp; &ensp; 24
          </p>
          <p>
            <span>Address : </span> &nbsp; &ensp; Bangalore, Karnataka
          </p>
          <p>
            <span>Email: </span> &nbsp; &ensp;densk619@gmail.com
          </p>
          <p>
            <span>Contact : </span> &nbsp; &ensp; +91 7760936876
          </p>
          <div className="description">
            <span>
              <FaQuoteLeft />{" "}
            </span>
            &ensp;Passionate Developer, Experienced in end-to-end development
            and deployment of web applications. Experienced in tools and
            technologies such as Node.js, React.js, MYSQL, MongoDb. &ensp;
            <span>
              <FaQuoteRight />
            </span>
          </div>
        </div>
      </div>
    </ProtfolioAboutWrap>
  );
};

export default About;
