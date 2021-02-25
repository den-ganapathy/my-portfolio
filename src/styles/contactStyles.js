import styled from "styled-components";

const media = {
  mobile: "@media(max-width:600px)",
  tab: "@media(max-width:992px)",
};

export const ProtfolioContactWrap = styled.div`
  padding-top: 2rem;
  padding-bottom: 1rem;
  background: #01000a;

  .contact-header {
    color: white;
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    margin: 0 20%;
    padding: 2rem;
    font-family: "Share Tech Mono", monospace;
    ${media.tab} {
      font-size: 2.5rem;
      padding: 0rem;
    }
    ${media.mobile} {
      font-size: 2rem;
      padding: 0rem;
    }
  }
  .contact-body {
    width: 100vw;
    margin: 2rem auto;
    margin-bottom: 6rem;
    margin-top: 6rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    &-mail,
    &-call,
    &-location {
      color: white;
      flex: 0 0 28%;
      display: flex;
      text-align: center;
      font-size: 1.5rem;
      align-items: center;
      flex-direction: column;
      padding-bottom: 2rem;
      p {
        font-size: 3rem;
      }
    }
    ${media.tab} {
      margin-top: 1rem;
      margin-bottom: 1rem;
      flex-direction: column;
      padding-bottom: 0rem;
      &-mail,
      &-call,
      &-location {
        p {
          font-size: 2.5rem;
        }
      }
    }
    ${media.mobile} {
      margin-top: 1rem;
      margin-bottom: 1rem;
      &-mail,
      &-call,
      &-location {
        padding-bottom: 1rem;
        font-size: 1rem;
        p {
          font-size: 2rem;
        }
      }
    }
  }

  .contact-socials {
    margin: 0 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 2rem;
    p {
      display: flex;
      text-decoration: none;
      color: black;
      font-size: 2rem;
      color: white;
      border-radius: 0.5rem;
      cursor: pointer;
      ${media.tab} {
        font-size: 1.8rem;
        padding: 0rem;
      }
      ${media.mobile} {
        font-size: 1.5rem;
        padding: 0rem;
      }
    }
    .fb {
      padding: 1rem;

      :hover {
        background: white;
        color: #084d8a;
      }
    }
    .insta {
      padding: 1rem;
      :hover {
        background: white;
        color: #ee50a9;
      }
    }
    .linkedin {
      padding: 1rem;
      :hover {
        background: white;
        color: #0974d3;
      }
    }
    .git {
      padding: 1rem;
      :hover {
        background: white;
        color: black;
      }
    }
  }
`;
