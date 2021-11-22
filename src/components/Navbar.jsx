import React, { useEffect } from "react";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import close from "../images/close.png";
import { NavbarWrap } from "../styles/navbarStyles";

export default function Navbar(props) {
  const dataArr = [
    { name: "About", id: "1" },
    // { name: "Education", id: "2" },
    { name: "Project", id: "3" },
    // { name: "Contact", id: "4" },
  ];
  useEffect(() => {
    Aos.init({
      duration: 5000,
    });
  });
  return (
    <NavbarWrap
      onClick={props.toggleNavbar}
      data-aos="fade-left"
      data-aos-duration="500"
    >
      <div className="navbarContainer">
        <div className="navbarContainer__header">
          <img onClick={props.toggleNavbar} src={close} alt="close" />
        </div>
        <div className="navbarContainer__contents">
          {dataArr.map((data, index) => {
            return (
              <Link
                to={data.id}
                smooth={true}
                onClick={props.toggleNavbar}
                key={index}
              >
                <div className="navbarContainer__contents--para">
                  {data.name}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </NavbarWrap>
  );
}
