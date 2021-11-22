import styled from "styled-components";

const media = {
  tab: "@media(max-width:992px)",
  mobile: "@media(max-width:600px)",
};

export const NavbarWrap = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: transparent;

  ${media.tab} {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
  }

  .navbarContainer {
    border-left: 2px solid white;
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    width: 20%;
    height: 100vh;
    padding: 0 1.5rem;

    &__header {
      margin: 1.3rem 0;
      margin-right: 0rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      color: #17aed4;
      font-size: 1.5rem;
      font-weight: 600;
    }

    &__contents {
      width: 100%;
      color: white;

      &--para {
        font-family: "Kanit", sans-serif;
        font-size: 1rem;
        margin-bottom: 1rem;
        cursor: pointer;
      }
    }
    ${media.mobile} {
      width: 40%;
    }
  }
`;
