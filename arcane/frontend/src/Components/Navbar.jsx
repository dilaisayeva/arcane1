import React, { useState } from "react";
import userInfo from "../Data/user.json";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Notification, Search, User } from "../Assets/SVGs/icons";

export const Navbar = ({ register, searchbar }) => {

  const [showSearchbar, setShowSearchbar] = useState(false)

  return (
    <NavbarStyle >
      <div className="wrapper">
        <Link to="/">
          <h1 className="header-logo">ArcRate</h1>
        </Link>
        {
          searchbar &&
          <>
            {
              register && <ins className="registerMargin" />
            }
            <div className="searchBar">
              <span>{Search(.8, "#2e3a59")}</span>
              <input type="text" placeholder="Search ..." />
            </div>
          </>
        }
        {
          register ?
            <div className="register">
              <a href="#">Sign in</a>
              <a href="#">Sign up</a>
              <div className="mobile">
                <span onClick={() => setShowSearchbar(!showSearchbar)}>{Search(.9)}</span>
                <span>{User()}</span>
              </div>
            </div>
            :
            <div className="first">
              <div>
                <button onClick={() => setShowSearchbar(!showSearchbar)} alt="Search">{Search(.95, "#333")}</button>
                <Link to="/notifications">{Notification(1, "#555")}</Link>
              </div>
              <span></span>
              <Link to="/consultant"><img src={userInfo.image} alt="User profile picture" /></Link>
            </div>
        }
      </div>
      <div className="searchWrapper">
        {
          showSearchbar &&
          <div className="searchBarMobile">
            <span>{Search(.8, "#2e3a59")}</span>
            <input type="text" placeholder="Search..." />
          </div>
        }
      </div>
    </NavbarStyle>
  );
};

const NavbarStyle = styled.div`
  background-color: #fff;
  a {
    text-decoration: none  !important;

  }
  .header-logo{
    color: #ff9f1a;

  }
  .wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 0;
    margin: 0 auto;
    width: 84%;
    .logo{
      transform: scale(1.05);
    }
    .register{
      a{
        text-decoration: none ;
        color: #000;
        margin-left: 2rem;
        font-weight: 400;

      }
      a:nth-child(2){
        background-color: #ffe01b;
        padding: .7rem 1.4rem;
        border-radius: 0.5rem;
        transition: all .1s;
        &:hover{
          background-color: #e9ca00;
        }
      }
      .mobile{
        display: none;
      }
    }
    .first {
      display: flex;
      align-items: center;
      div {
        button:nth-child(1){
          display: none;
        }
        a,button {
          cursor: pointer;
          background: none;
          border: none;
          transition: all 0.1s;
          margin: 0 .5rem;
        }
      }
      span{
        border-left: 1px solid #ccc;
        height: 2rem;
        margin: 0 1.6rem 0 .8rem;
      }
      img {
        width: 3rem;
        height: 3rem;
        border-radius: 100%;
      }
    }
    .registerMargin{
      margin-left: -4rem;
    }
    .searchBar{
      display: flex;
      align-items: center;
      background-color: #edf1f7;
      padding: .5rem 0rem;
      border-radius: 0.6rem;
      margin: .1rem 0;
      margin-left: -2rem;
      span{
        padding: .3rem 1.5rem 0.1rem 1.2rem;
      }
      input{
        font-family: "Euclid";
        background: none;
        border: none;
        outline: none;
        font-size: 15px;
        width: 22rem;
        ::placeholder{
          color: #8f9bb3;
          opacity: 1;
        }
        :-ms-input-placeholder{
          color: #8f9bb3;
        }
        ::-ms-input-placeholder{
          color: #8f9bb3;
        }
      }
    }
  }
  .searchWrapper{
    display: none;
  }
  @media screen and (max-width: 1024px) {
    .searchWrapper{
      display: block;
      background-color: #fff;
      border-bottom: 1px solid transparent;
      .searchBarMobile{
        display: flex;
        align-items: center;
        background-color: #f2f2f2;
        padding: .5rem 0;
        border-radius: 0.4rem;
        width: 90%;
        margin: 0rem auto;
        margin-bottom: .5rem;
        span{
          padding: 0 .8rem;
        }
        input{
          font-family: "Euclid";
          background: none;
          border: none;
          outline: none;
          font-size: 15px;
          width: 22rem;
          ::placeholder{
            color: #8f9bb3;
            opacity: 1;
          }
          :-ms-input-placeholder{
            color: #8f9bb3;
          }
          ::-ms-input-placeholder{
            color: #8f9bb3;
          }
        }
      }
    }
    .wrapper{
      padding: .8rem 1rem;
      margin-top: .2rem;
      width: 90%;
      .logo{
        max-height: 1.8rem;
      }
      .register{
        a{
          text-decoration: none;
          color: #000;
          margin-left: 1rem;
          font-weight: 400;
        }
        a{
          display: none;
        }
        .mobile{
          display: block;
          span{
            margin-left: 1.5rem;
          }
        }
      }
      .first{
        div{
          margin: 0 .8rem;
          button:nth-child(1){
            /* display: inline; */
          }
          button{
            padding: 0.25rem;
            margin: 0.25rem;
          }
        }
        img{
          width: 2.5rem;
          height: 2.5rem;
        }
        span{
          display: none;
        }
      }
      .searchBar{
        display: none;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .wrapper{
      padding: .8rem 1rem;
      .logo{
        max-height: 1.8rem;
      }
      .first{
        div{
          margin: 0 .8rem;
          button:nth-child(1){
            display: inline;
          }
          button{
            padding: 0.25rem;
            margin: 0.25rem;
          }
          a{
            /* margin-top: -.2rem; */
            /* padding-bottom: -.5rem; */
            /* border: 1px solid red; */
          }
        }
        img{
          width: 2.5rem;
          height: 2.5rem;
        }
        span{
          display: none;
        }
      }
      .searchBar{
        display: none;
      }
    }
  }
`;
