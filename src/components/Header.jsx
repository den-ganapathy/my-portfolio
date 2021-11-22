import React from "react";
import { HeaderWrap } from "./../styles/headerStyles";
import { Link } from "react-scroll";
import { TiThMenu } from "react-icons/ti";
// const ganapathyimg = require("./../../../images/ganapathysk.jpg");

const headerData = [
  { name: "About", id: "1" },
  // { name: "Education", id: "2" },
  { name: "View Projects", id: "3" },
  // { name: "Contact", id: "4" },
];

const header = (props) => {
  return (
    <HeaderWrap>
      {headerData.map((data) => {
        const { name, id } = data;
        return (
          <div key={id} className="header-data">
            <Link to={id} smooth={true}>
              {name}
            </Link>
          </div>
        );
      })}

      <div className="navbar">
        <TiThMenu onClick={props.toggleNavbar} />
      </div>
    </HeaderWrap>
  );
};

export default header;
