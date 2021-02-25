import styled from "styled-components";

const media = {
  mobile: "@media(max-width:600px)",
  tab: "@media(max-width:992px)",
};

export const HeaderWrap = styled.div`
  display: flex;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  padding: 1rem;
  padding-left: 0rem;
  width: 100vw;
  font-weight: bold;
  box-shadow: 0 0px 10px black;
  justify-content: flex-end;
  position: fixed;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  color: white;

  .header-data {
    margin-right: 8rem;
    cursor: pointer;
    font-size: 1.3rem;
    :hover {
      text-shadow: 5px 5px 5px lightblue, 10px 10px 25px aliceblue;
    }
    ${media.tab} {
      display: none;
    }
  }

  .navbar {
    display: none;
    ${media.tab} {
      cursor: pointer;
      display: inline;
      padding-right: 5%;
      font-size: 1.5rem;
    }
  }

  ${media.tab} {
    justify-content: flex-end;
  }
  ${media.mobile} {
  }
`;
