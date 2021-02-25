import React from "react";
import { ProtfolioContactWrap } from "./../styles/contactStyles";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaGithubSquare,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";

const fbLink = "https://www.facebook.com/den.coorg.9/";
const instaLink = "https://www.instagram.com/den_ganapathy/";
const linkedInLink = "https://www.linkedin.com/in/ganapathy-s-k-66ba2979";
const gitLink = "https://github.com/den-ganapathy";

const Contact = () => {
  const gotoLink = (url) => {
    window.open(url);
  };

  return (
    <ProtfolioContactWrap>
      <div className="contact-header">Contact</div>
      <div className="contact-body">
        <div className="contact-body-mail">
          <p>
            <FaEnvelope />
          </p>
          densk619@gmail.com
        </div>
        <div className="contact-body-call">
          <p>
            <MdPhoneAndroid />
          </p>
          +917760936876
        </div>
        <div className="contact-body-location">
          <p>
            <FaMapMarkerAlt />
          </p>
          Bangalore, India
        </div>
      </div>
      <div className="contact-socials">
        <p onClick={() => gotoLink(fbLink)} className="fb">
          <FaFacebookSquare />
        </p>
        <p onClick={() => gotoLink(instaLink)} className="insta">
          <FaInstagram />
        </p>
        <p onClick={() => gotoLink(linkedInLink)} className="linkedin">
          <FaLinkedin />
        </p>
        <p onClick={() => gotoLink(gitLink)} className="git">
          <FaGithubSquare />
        </p>
      </div>
    </ProtfolioContactWrap>
  );
};

export default Contact;
