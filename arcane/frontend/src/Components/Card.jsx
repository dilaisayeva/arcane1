import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Check, Manat, StarFilled } from "../Assets/SVGs/icons"
import Checkbox from "../Components/Checkbox"
export const Card = ({course}) => {

  function CountStars(rating){

    let fullStars = rating
    let emptyStars = 5 - rating
    let template = []

    for(let i = 0; i < fullStars; i++){
      template.push("f")
    }

    for(let i = 0; i < emptyStars; i++){
      template.push("e")
    }

    return (
      <div className="stars">
        {
          template.map((i, index) => {
            return(
              <p key={index}>{i === "f" ? StarFilled(.75, "#f2c94c", "#f2c94c") : StarFilled(.75, "#f2c94c")}</p>
            )
          })
        }
      </div>
    )
  }

  return (
    <CardStyle>
    <Checkbox/>
      <div className="cardWrapper">
        <Link to={course.link}>
          <div className="courseImage">
            <img src={course.image} alt="" />
          </div>
          <div className="details">
            <p>{course.title}</p>
            <div className="teacher">
              <div className="image">
                <img src={course.teacherImage} alt="" />
              </div>
              <div>
                <p>{course.teacherName}</p>
                {CountStars(Math.floor(course.rating))}
              </div>
            </div>
            <div className="price">
              <p>{Manat()}</p>
              <p>{course.price}</p>
            </div>
          </div>
        </Link>
      </div>
    </CardStyle>
  )
}

const CardStyle = styled.div`
  transition: all .15s;
  a{
    text-decoration: none;
    color: #000;
  }
  .cardWrapper{
    display: flex;
    flex-direction: column;
    max-width: 294px;
    background-color: #fff;
    border-radius: 0.5rem;
    margin: 0 .5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-bottom: 0.4rem;
    .courseImage{
      display: flex;
      margin: 0.5rem;
      max-height: 180px;
      img{
        border-radius: 0.5rem;
        max-width: 100%;
        object-fit: cover;
      }
    }
    .details{
      margin: 1.2rem 1.2rem 0 1.2rem;
      p{
        font-weight: 500;
        font-size: 17px;
      }
      .teacher{
        display: flex;
        align-items: center;
        margin: 1.5rem 0 0 0;
        .image{
          img{
            width: 2.8rem;
            height: 2.8rem;
            margin-top: 0rem;
            border-radius: 100%;
            object-fit: cover;
          }
        }
        div{
          p{
            font-size: 16px;
            margin: 0 1rem;
            font-weight: 400;
          }
        }
        .stars{
          display: flex;
          margin: 0.2rem 1rem;
          p{
            margin: 0rem;
            margin-right: 0.4rem;
          }
        }
      }
      .price{
        display: flex;
        align-items: center;
        p{
          margin-right: .5rem;
          font-weight: 400;
        }
      }
    }
  }
  &:hover{
    .cardWrapper{
      background-color: #ddd;
    }
  }
  @media screen and (max-width:1024px){
    .cardWrapper{
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 320px;
      background-color: #fff;
      border-radius: 0.5rem;
      margin: 0 1rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      padding-bottom: 0.4rem;
      .courseImage{
        display: flex;
        margin: 0.5rem;
        max-height: 200px;
        img{
          display: flex;
          margin: 0 auto;
          border-radius: 0.5rem;
          max-width: 100%;
          object-fit: cover;
        }
      }
      .details{
        margin: 1.2rem 1.2rem 0 1.2rem;
        p{
          font-weight: 500;
          font-size: 17px;
        }
        .teacher{
          display: flex;
          align-items: center;
          margin: 1.5rem 0 0 0;
          .image{
            img{
              width: 2.8rem;
              height: 2.8rem;
              margin-top: 0rem;
              border-radius: 100%;
              object-fit: cover;
            }
          }
          div{
            p{
              font-size: 16px;
              margin: 0 1rem;
              font-weight: 400;
            }
          }
          .stars{
            display: flex;
            margin: 0.2rem 1rem;
            p{
              margin: 0rem;
              margin-right: 0.4rem;
            }
          }
        }
        .price{
          display: flex;
          align-items: center;
          p{
            margin-right: .5rem;
            font-weight: 400;
          }
        }
      }
    }
  }
`