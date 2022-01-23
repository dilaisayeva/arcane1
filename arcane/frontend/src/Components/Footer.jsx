import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Email, Facebook, Instagram, Location, Phone, Twitter, Youtube } from "../Assets/SVGs/icons";

export const Footer = ({extended, dark}) => {
  return (
    
    <FooterStyle dark={dark}>
      <br /> <br /> <br /> <br /> <br /><br /><br /><br /><br /><br /><br /><br /><br />
      {extended && 
        <div className="extended">
          <div className="first">
            <br /><br /><br /><br /><br />
            {/* <img src={logo} alt="logo" /> ArcRate */}
            <div className="links">
              <a href="">{Instagram()}</a>
              <a href="">{Facebook()}</a>
              <a href="">{Youtube()}</a>
              <a href="">{Twitter()}</a>
            </div>
          </div>
          <div className="second">
            <h3>Menu</h3>
            <Link to="/category">Categories</Link>
            <Link to="/Contact">Contact us</Link>
            <Link to="/about">About</Link>
          </div>
          <div className="third">
            <h3>Help</h3>
            <Link to="/faq">FAQ</Link>
            <Link to="/howitworks">How is works?</Link>
            {/* <Link to="/return">Terms and Conditions</Link> */}
          </div>
          <div className="forth">
            <h3>Contact</h3>
            <div><span>{Location()}</span><p> Baku, Azerbaijan</p></div>
            <div><span>{Email()}</span><p>mail@arcrate.com</p></div>
            <div><span>{Phone()}</span><p>*1111</p></div>
          </div>
        </div>
      }
      <div className="miniFooter">
        <p>&copy; ArcRate 2021. All rights reserved.</p>
        <div>
          <a href="">Terms and Conditions </a>
          <a href="">Privacy and Policy</a>
        </div>
      </div>
    </FooterStyle>
  );
};

const FooterStyle = styled.div`
  display: block;
  justify-content: space-between;
  align-items: center;
  color: #727272;
  background-color: ${props => props.dark ? "#f5f5f5" : "#fff"};
  p {
    font-size: 17px;
  }
  a {
    font-size: 17px;
    margin-left: 2rem;
    text-decoration: none;
    color: #727272;
  }
  .extended{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 0.5rem 7rem;
    h3{
      font-weight: 500;
      color: #4f4f4f;
    }
    p{
      /* margin: 0; */
    }
    div{
      margin: 4rem 0 3rem 0;
    }
    .first{
      img{
        margin-top: .5rem;
      }
      div{
        margin: 3rem 0;
        a{
          margin: 0;
          margin-right: 2rem;
        }
      }
    }
    .second, .third{
      display: flex;
      flex-direction: column;
      a{
        margin: .6rem 0;
      }
    }
    .forth{
      div{
        display: flex;
        align-items: center;
        margin: 1.5rem 0;
        /* border: 1px solid red; */
        span{
          margin-right: 1rem;
          margin-top: .4rem;
        }
        p{
          margin: 0;
        }
      }
    }
  }
  .miniFooter{
    display: flex;
    border-top: 1px solid #eee;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 7rem;
  }
  @media screen and (max-width: 800px) {
    display: block;
    padding: 0rem;
    padding-bottom: 0rem;
    margin: 0;
    text-align: center;
    .miniFooter{
      display: flex;
      flex-direction: column;
      padding: 0 1rem 1.5rem 1rem;
      margin-top: 0rem;
      a{
        margin: 0.5rem;
      }
      div{
        margin: 2rem 0 1rem 0;
      }
      p{
        order: 2;
        margin-bottom: 0;
      }
    }
    .extended{
      grid-template-columns: 1fr;
      padding: 0;
      div{
        margin: .5rem 0;
      }
      .first{
        margin-top: 2rem;
        div{
          margin-bottom: 0;
          a{
            margin: 0 1.2rem;
          }
        }
      }
      .forth{
        width: 80%;
        margin: 1rem auto;
        div{
          display: flex;
          justify-content: center;
          text-align: center;
        }
      }
    }
  }
`;
