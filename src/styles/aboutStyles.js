import styled from "styled-components";

const media = {
  mobile: "@media(max-width:600px)",
  tab: "@media(max-width:992px)",
};

export const ProtfolioAboutWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #000;
  -webkit-transition: background-color 2s ease-out;
  -moz-transition: background-color 2s ease-out;
  -o-transition: background-color 2s ease-out;
  transition: background-color 2s ease-out;

  ${media.tab} {
    height: 100%;
    padding-top: 5rem;
    background: black;
  }
  ${media.mobile} {
  }

  .about {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &-header {
      flex: 0 0 45%;
      img {
        display: flex;
        margin: 1rem auto;
        width: 30rem;
        height: auto;
        border-radius: 50%;
        text-align: center;
        ${media.tab} {
        }
        ${media.mobile} {
          width: 16rem;
          height: auto;
        }
      }
      &-name {
        text-align: center;
        font-weight: bold;
        font-family: "PT Serif", serif;
        letter-spacing: 0.2rem;
        font-size: 2.5rem;
        padding: 1rem 0rem;
        padding-top: 0.5rem;
        color: #2b8fd4;
        ${media.tab} {
        }
        ${media.mobile} {
          font-size: 2rem;
        }
      }
      &-designation {
        text-align: center;
        padding-bottom: 1rem;
        letter-spacing: 0.1rem;
        font-size: 1.5rem;
        color: #cc6dde;
        ${media.tab} {
          padding-bottom: 0rem;
        }
        ${media.mobile} {
          font-size: 1rem;
        }
      }
      ${media.tab} {
        border: none;
      }
      ${media.mobile} {
      }
    }
    &-contact {
      margin-right: 10%;
      flex: 0 0 50%;
      p {
        font-size: 1.5rem;
        color: #fff;
        span {
          font-size: 1.8rem;
          color: #cc6dde;
          font-weight: bold;
        }
        ${media.tab} {
          text-align: center;
          margin: 1rem auto;
          font-size: 1.1rem;
          span {
            font-size: 1.2rem;
          }
        }
        ${media.mobile} {
          font-size: 1rem;
          span {
          }
        }
      }
      .description {
        letter-spacing: 0.02rem;
        line-height: 2;
        justify-content: space-between;
        margin-top: 7rem;
        margin-left: 0%;
        text-align: center;
        font-size: 1.5rem;
        color: #fff;
        span {
          color: #2b8fd4;
        }
        ${media.tab} {
          text-align: center;
          margin: 2rem 1rem;
          font-size: 1.1.rem;
        }
        ${media.mobile} {
          font-size: 1rem;
        }
      }
      .contact-body {
        margin: 2rem auto;
        /* margin-bottom: 6rem; */
        /* margin-top: 6rem; */
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;

        &-icon {
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
          width: 100vw;
          margin-top: 1rem;
          margin-bottom: 1rem;
          flex-direction: column;
          padding-bottom: 0rem;
          &-icon {
            p {
              font-size: 2.5rem;
            }
          }
        }
        ${media.mobile} {
          margin-top: 1rem;
          margin-bottom: 1rem;
          &-icon {
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
        .icon {
          padding: 1rem;
          :hover {
            background: white;
            color: black;
          }
        }
      }

      ${media.tab} {
        display: flex;
        flex-direction: column;
        margin: 2rem 1rem;
        font-size: 1.1rem;
      }
      ${media.mobile} {
        font-size: 1rem;
      }
    }
    ${media.tab} {
      display: flex;
      flex-direction: column;
    }
    ${media.mobile} {
    }
  }
`;
