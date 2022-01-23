import React, { useState } from "react";
import styled from "styled-components"
import courses from "../Data/courses.json"
import { Card } from "../Components/Card"
import filter from "../Assets/SVGs/candle.svg"
import { ArrowChevron } from "../Assets/SVGs/icons"
import Compare  from "../Components/Compare";
export const Home = () => {

  const [filterOpen, setFilterOpen] = useState(false)

  return (
    <HomeStyle>
      <div className="pick">
        <div className="wrapperCategories">
          <div className="categories">
            <button><h1>All</h1></button>
            <button><i className="fas fa-car icon-style" title="Vehicle"></i></button>
            <button><i className="fab fa-playstation icon-style" title="Game"></i></button>
            <button><i className="fas fa-running icon-style" title="Sport"></i></button>
            <button><i className="fas fa-hotel icon-style" title="Horeca"></i></button>
            <button><i className="fas fa-store icon-style" title="Store"></i></button>
            <button><i className="fas fa-mobile-alt icon-style" title="Mobile"></i></button>
          </div>
          <div className="wrapperFilter">
            <div className={filterOpen ? "filter open" : "filter"}>
              <button onClick={() => setFilterOpen(!filterOpen)}><img src={filter} alt="" /> <ins>Filter</ins></button>
            </div>
          </div>
          <Compare />     
       </div>
        {
          filterOpen &&
          <div className="filterOpen">
            <div className="select">
              <p>Category</p>
              <div className="selectdiv">
                <label>
                    <select name="category">
                      <option label="" value="">Choose</option>
                      <option label="" defaultValue="Category 1">Category 1</option>
                    </select>
                    <span>{ArrowChevron(0.7)}</span>
                </label>
              </div>
            </div>
            <div className="select">
              <p>Category</p>
              <div className="selectdiv">
                <label>
                    <select name="category">
                      <option label="" value="">Choose</option>
                      <option label="" defaultValue="Category 1">Category 1</option>
                    </select>
                    <span>{ArrowChevron(0.7)}</span>
                </label>
              </div>
            </div>
            <div className="select">
              <p>Category</p>
              <div className="selectdiv">
                <label>
                    <select name="category">
                      <option label="" value="">Choose</option>
                      <option label="" defaultValue="Category 1">Category 1</option>
                    </select>
                    <span>{ArrowChevron(0.7)}</span>
                </label>
              </div>
            </div>
          </div>
        }
      </div>
      <div className="wrapperCourses">
        <div className="courses">
          {
            Object.keys(courses).map((i) => {
              return(
                <Card key={courses[i].id} course={courses[i]}/>
              )
            })
          }
        </div>
        <button className="more">More</button>
      </div>

    </HomeStyle>
  )
}

const HomeStyle = styled.div`
  button{
    background: none;
    border: none;
    padding: .3rem .3rem;
    border-radius: .5rem;
    font-family: "Euclid";
    cursor: pointer;
    transition: all .1s;
    ${'' /* font-size: 30px !important; */}
    &:hover{
      background-color: #ddd;
    }
  }
  .icon-style{
    color: #B53471;
    font-size: 30px !important;
  }
  .wrapperCourses{
    background-color: #f8f8f8;
    margin: 1rem 0;
    .courses{
      width: 85%;
      margin: 0rem auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      
    }
    .more{
      display: flex;
      margin: 3rem auto;
      padding: 1rem 3rem;
      font-weight: 500;
      background-color: #ffe01b;
      &:hover{
        background-color: #f8d700;
      }
    }
  }
  .pick{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 7.7rem;
    padding-top: 2rem;
    background-color: #fff;
    border-top: 1px solid #f5f5f5;
    *{
      font-size: 17px;
    }
    .wrapperCategories{
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      .categories{
        button{
          padding: .6rem .9rem;
          margin-right: 2rem;
          color: #4f4f4f;
        }
        button:nth-child(1){
          background-color: #f3f3f3;
        }
      }
      .wrapperFilter{
        .open{
          button{
            background-color: #f2f2f2;
          }
        }
        .filter{
          button{
            display: flex;
            align-items: center;
            border: 1px solid #eee;
            color: #4f4f4f;
            ins{
              margin: 0 .6rem 0 .35rem;
              text-decoration: none;
            }
            img{
              margin: .4rem .5rem;
            }
          }
        }
      }
    }
    .filterOpen{
      display: flex;
      grid-gap: 0rem;
      width: 100%;
      background-color: #fff;
      p{
        margin: 1.4rem 0 0 0;
        font-size: 14px;
        font-weight: 500;
      }
      input,select{
        font-family: "Euclid";
        padding: .6rem 1rem;
        margin: .7rem 0 .5rem 0;
        border-radius: 0.5rem;
        border: none;
        background-color: #fff;
        border: 2px solid #eee;
        font-size: 15px;
        color: #777;
        appearance: none;
      }
      .selectdiv{
        position: relative;
        margin-right: 2rem;
        label{
          span{
            right: 1.4rem;
            top: .3rem;
            height: 34px;
            padding: 15px 0px 0px 8px;
            position: absolute;
            pointer-events: none;
          }
        }
        select{
          min-width: 300px;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          & ::-ms-expand {
            display: none;
          }
        }
      }
    }
  }
  @media screen and (max-width:1024px){
    button{
      background: none;
      border: none;
      padding: .5rem;
      border-radius: 0.5rem;
      font-family: "Euclid";
      cursor: pointer;
      transition: all .1s;
      &:hover{
        background-color: #ddd;
      }
    }
    .pick{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 0rem;
      background: none;
      border: none;
      *{
        font-size: 17px;
      }
      .wrapperCategories{
        display: flex;
        flex-direction: column;
        width: 100%;
        background: #fff;
        .categories{
          display: flex;
          width: 96%;
          margin: 0 0 0 auto;
          overflow: scroll;
          padding: .5rem 0 .8rem 0;
          ::-webkit-scrollbar {
            display: none;
          }
          -ms-overflow-style: none;
          scrollbar-width: none;
          button{
            padding: .5rem .8rem;
            margin-right: .8rem;
            min-width: max-content;
            color: #4f4f4f;
          }
          button:nth-child(1){
            background-color: #f3f3f3;
          }
        }
      }
      .wrapperFilter{
        width: 96%;
        margin: 0 0 0 auto;
        .filter{
          margin: .8rem 0;
          button{
            display: flex;
            align-items: center;
            border: none;
            color: #4f4f4f;
            background-color: #fff;
            ins{
              margin: 0 .35rem;
              text-decoration: none;
            }
            ins:nth-child(1){
              margin-top: .1rem;
            }
          }
        }
      }
      .filterOpen{
        display: flex;
        flex-direction: column;
        padding-bottom: 2rem;
        justify-content: center;
        background-color: #fff;
        p{
          margin: 1.4rem auto 0 auto;
          font-size: 14px;
          font-weight: 500;
          width: 90%;
        }
        input,select{
          font-family: "Euclid";
          padding: .6rem 1rem;
          margin: .7rem 0 .5rem 0;
          border-radius: 0.5rem;
          border: none;
          background-color: #fff;
          border: 2px solid #eee;
          font-size: 15px;
          color: #777;
          appearance: none;
        }
        .selectdiv{
          position: relative;
          width: 90%;
          margin: 0 auto;  
          label{
            span{
              right: 1.4rem;
              top: .3rem;
              height: 34px;
              padding: 15px 0px 0px 8px;
              position: absolute;
              pointer-events: none;
            }
          }
          select{
            width: 100%;
            min-width: auto;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            & ::-ms-expand {
              display: none;
            }
          }
        }
      }
    }
    .wrapperCourses{
      background-color: #f8f8f8;
      .courses{
        width: 100%;
        margin: 0rem auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
      .more{
        display: flex;
        margin: 3rem auto;
        padding: 1rem 3rem;
        font-weight: 500;
        background-color: #ffe01b;
        &:hover{
          background-color: #f8d700;
        }
      }
    }
  }
`