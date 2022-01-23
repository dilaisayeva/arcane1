import React from "react";
import styled from "styled-components";
import userInfo from "../Data/user.json";
import { Link, useLocation } from "react-router-dom";
import { Gallery, Money, Task, LogOut, Settings } from "../Assets/SVGs/icons";

export const Sidebar = () => {

  const location = useLocation();

  return (
    <SidebarStyle>
       
    </SidebarStyle>
  )
}

const SidebarStyle = styled.div`
  background-color: #fff;
  padding: 2rem 2rem;
  /* margin: 0 .5rem; */
  height: fit-content;
  text-align: center;
  border-radius: 0.6rem;
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    object-fit: cover;
  }
  a{
    text-decoration: none;
    color: #000;
  }
  .username {
    font-size: 21px;
    margin-top: 0.5rem;
    font-weight: 500;
  }
  .links {
    margin: 2rem 0 0 0;
    font-weight: 400;
    font-size: 17px;
    a {
      display: flex;
      align-items: center;
      color: #000;
      text-decoration: none;
      border-radius: 0.55rem;
      padding: 0.5rem 1.8rem;
      margin: 0.3rem 0.5rem;
      /* margin: 0;   */
      transition: 0.1s all;
      ins {
        margin-bottom: -0.4rem;
      }
      p {
        margin: 0.35rem 1.1rem;
      }
      &:hover {
        background-color: #ddd;
      }
    }
    .current {
      background-color: #ffe01b;
      border-radius: 0.55rem;
      :hover{
        background-color: #ffe01b;
      }
    }
  }
  @media screen and (max-width: 800px) {
    padding: 2rem 1rem;
  }
`