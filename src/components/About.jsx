import React from "react";
import { ProtfolioAboutWrap } from "../styles/aboutStyles";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";

import ganapathy from "./../images/gana.jpeg";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaGithubSquare,
  FaEnvelope,
} from "react-icons/fa";

const About = () => {
  const socialsData = [
    {
      id: "facebook",
      icon: FaFacebookSquare,
      link: "https://www.facebook.com/den.coorg.9/",
    },
    {
      id: "instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/den_ganapathy/",
    },
    {
      id: "linkedin",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/ganapathy-s-k-66ba2979",
    },
    {
      id: "github",
      icon: FaGithubSquare,
      link: "https://github.com/den-ganapathy",
    },
  ];

  const contactsData = [
    {
      id: "Email",
      icon: FaEnvelope,
      link: "",
      body: "ganapathysk1@gmail.com",
    },
    {
      id: "Phone",
      icon: MdPhoneAndroid,
      link: "",
      body: "+91-7760936876",
    },
  ];

  const gotoLink = (url) => {
    window.open(url);
  };

  return (
    <ProtfolioAboutWrap>
      <div className="about">
        <div className="about-header">
          <img src={ganapathy} alt=""></img>
          <div className="about-header-name">Ganapathy S K</div>
          <div className="about-header-designation">Software Engineer</div>
        </div>
        <div className="about-contact">
          <div className="description">
            <span>
              <FaQuoteLeft />{" "}
            </span>
            &ensp;Enthusiastic developer with an aim to deliver a fulfilling
            product to end- user. Passionate about implementing scalable
            solutions so as to improve performance &ensp;
            <span>
              <FaQuoteRight />
            </span>
          </div>
          <div className="contact-body">
            {contactsData &&
              contactsData.map((item) => {
                return (
                  <div className="contact-body-icon">
                    <p>
                      <item.icon />
                    </p>
                    {item.body}
                  </div>
                );
              })}
          </div>
          <div className="contact-socials">
            {socialsData &&
              socialsData.map((item) => {
                return (
                  <p onClick={() => gotoLink(item.link)} className="icon">
                    <item.icon />
                  </p>
                );
              })}
          </div>
        </div>
      </div>
    </ProtfolioAboutWrap>
  );
};

export default About;
