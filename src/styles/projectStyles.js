import styled from "styled-components";

const media = {
  mobile: "@media(max-width:600px)",
  tab: "@media(max-width:992px)",
};

export const ProtfolioProjectWrap = styled.div`
  width: 100vw;
  height: 85vh;
  background: #426d8d;
  z-index: 1;
  -webkit-transition: background-color 2s ease-out;
  -moz-transition: background-color 2s ease-out;
  -o-transition: background-color 2s ease-out;
  transition: background-color 2s ease-out;
  :hover {
    background: #4e9d66;
  }

  ${media.tab} {
    height: 100%;
  }
  ${media.mobile} {
    height: 100%;
    padding-bottom: 2rem;
  }

  .project-header {
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    margin: 0 20%;
    padding: 2rem;
    font-family: "Share Tech Mono", monospace;
    color: white;
    ${media.tab} {
      font-size: 2.5rem;
      padding: 0rem;
      margin: 0 10%;
      padding-top: 1rem;
    }
    ${media.mobile} {
      font-size: 2rem;
      padding: 0rem;
      margin: 0 10%;
      padding-top: 1rem;
    }
  }
  .project {
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: space-evenly;
    margin-top: 2rem;
    ${media.tab} {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
    }
    ${media.mobile} {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &-container {
      background-color: white;
      img {
        margin: 0rem auto;
        margin-bottom: 0rem;
        width: 25rem;
        height: 19rem;
        object-fit: cover;
        border: 5px solid white;

        ${media.tab} {
          width: 16rem;
          height: 12rem;
        }
        ${media.mobile} {
          width: 15.5rem;
          height: 12rem;
        }
      }
      p {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1rem 1rem;
        span {
          font-size: 1.5rem;
          letter-spacing: 0.1rem;
          font-family: "Carter One", cursive;
          font-weight: bold;
        }
        button {
          cursor: pointer;
          color: white;
          background-color: #2b8fd4;
          padding: 0.5rem 1rem;
          border: none;
          transition: transform 1s ease-in-out;
          font-size: 1rem;
          letter-spacing: 0.1rem;
          border-radius: 0.5rem;
          :hover {
            transform: scale(1.1);
          }
        }
        ${media.tab} {
          margin: 0.5rem;
          span {
            font-size: 1rem;
          }
        }
        ${media.mobile} {
        }
      }
      ${media.tab} {
        margin-bottom: 2rem;
      }
      ${media.mobile} {
      }
    }
  }
`;
