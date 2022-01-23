import React from "react"
import { Link } from "react-router-dom"
import { Arrow, ArrowChevron, G1, G2, G4 } from "../Assets/SVGs/icons"
import styled from "styled-components"
import intro from "../Assets/SVGs/img.svg"
import landingMobile from "../Assets/SVGs/landingMobile.svg"
import puzzle from "../Assets/SVGs/puzzle.svg"
import rectangle from "../Assets/SVGs/rectangle.svg"

export const Landing = () => {
  return (
    <LandingStyle>
      <div className="wrapper">
        <FirstPart/>
        <Newsletter/>
      </div>
    </LandingStyle>
  )
}

const LandingStyle = styled.div`
  background-color: #fff;
  position: relative;
  overflow: hidden;
  .wrapper{
    width: 80%;
    margin: 0 auto;
  }
  @media screen and (max-width:1024px){
    .wrapper{
      width: 100%;
    }
  }
`

const FirstPart = () => {
  return(
    <FirstPartStyle>
      <div className="bg"></div>
      <div className="intro">
        <div className="move">
          <h1>Your starting point for any purchase</h1>
          <p className="description">Before buying anything, easily check on ArcRate. Compare the offers, see complete information about products and online stores and find out opinions about products or stores.</p>
          <div className="links">
            <Link to="/home">
              <div className="steam">
                <img src={puzzle} alt="" />
                <p>Categories</p>
              </div>
              <span>{Arrow(.8, "#7561da")}</span>
            </Link>
          </div>
        </div>
      </div>
    </FirstPartStyle>
  )
}

const FirstPartStyle = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 0;
  margin-bottom: 18rem;
  padding-top: 4.5rem;
  p{
    font-size: 17px;
    line-height: 1.5;
    margin: 1.5rem 0 3rem 0;
    color: #828282;
  }
  h1{
    color: #4f4f4f;
    font-size: 35px;
  }
  .intro{
    width: 70%;
    margin: 0 auto;
    margin-left: 5rem;
    margin-top: 1rem;
    z-index: 2;
    .move{
      .links{
        margin-top: 3.5rem;
        margin-bottom: 3.5rem;
        img{
          margin: 0 .25rem;
        }
      }
      a{
        display: flex;
        align-items: center;
        background-color: #fff;
        margin: 1.5rem 0;
        max-width: 400px;
        border-radius: 0.5rem;
        padding: .7rem .7rem;
        text-decoration: none;
        font-weight: 500;
        justify-content: space-between;
        div{
          display: flex;
          align-items: center;
        }
        span{
          margin: 0 1rem;
          margin-top: .2rem;
        }
        p{
          color: #4f4f4f;
          margin: 0 1.2rem;
          font-size: 20px;
        }
      }
    }
  }
  .bg{
    position: absolute;
    height: 45%;
    z-index: 1;
    width: 60%;
    margin-top: 2rem;
    background: url(${intro});
    background-repeat: no-repeat;
    background-size: contain;
    transform: scale(1.05) translateY(0);
    margin-left:45%;
  }
  @media screen and (max-width:1024px){
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0;
    margin-bottom: 0rem;
    padding-top: .5rem;
    background-color: #fbf5f1;
    p{
      margin: 1.5rem 0 3rem 0;
      color: #828282;
    }
    h1{
      color: #4f4f4f;
    }
    .intro{
      width: 90%;
      margin: 0 auto;
      margin-top: 2rem;
      .description{
        text-align: center;
      }
      h1{
        font-size: 24px;
        width: 90%;
        margin: 0 auto;
        margin-bottom: 20rem;
        text-align: center;
      }
      .move{
        .links{
          margin-top: 3.5rem;
          a{
            display: flex;
            align-items: center;
            background-color: #fff;
            margin: 1.5rem 0;
            max-width: 100%;
            border-radius: 0.5rem;
            padding: .7rem .7rem;
            text-decoration: none;
            font-weight: 500;
            justify-content: space-between;
            div{
              display: flex;
              align-items: center;
            }
            span{
              margin: 0 1rem;
              margin-top: .2rem;
            }
            p{
              color: #4f4f4f;
              margin: 0 1.5rem;
              font-size: 16px;
            }
          }
        }
      }
    }
    .bg{
      background: url(${landingMobile});
      background-position: center;
      background-repeat: no-repeat;
      height: 380px;
      width: 100%;
      transform: scale(1) translateX(0);
    }
  }
`

// const SecondPart = () => {
//   return(
//     <SecondPartStyle>
//       <div className="bg">
//         <div className="robots"></div>
//         <div className="text">
//           <h1>Laboratoriyada robotların hazırlanması</h1>
//           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus facere maiores at, in magnam ad iusto corrupti? Ducimus repellat corrupti accusantium error, eum, commodi eaque officia sunt, aspernatur harum repudiandae.</p>
//           <button>Başla</button>
//         </div>
//       <div className="figures3"></div>
//       </div>
//     </SecondPartStyle>
//   )
// }

// const SecondPartStyle = styled.div`
//   padding-bottom: 5rem;
//   z-index: -2;

//   .bg{
//     z-index: 1;
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     .figures3{
//       background: url(${figures3});
//       background-repeat: no-repeat;
//       background-size: auto;
//       background-position: top;
     
//       position: absolute;
//       height: 270px;
//       width: 270px;
//       z-index: 1;
//       align-self: center;
//       left: 82%;
//       transform: scale(1.6) rotate(-90deg);
//     }
//     .robots{
//       background: url(${robots});
//       background-repeat: no-repeat;
//       background-size: contain;
//     transform: scale(1.35) translateX(3rem);
//     }
//     .text{
//       display: flex;
//       flex-direction: column;
//       width: 90%;
//       margin-top: 2rem;
//       z-index: 3;
//       h1{
//         color: #4f4f4f;
//       }
//       p{
//         color: #828282;
//         margin-top: 1rem;
//         line-height: 1.5rem;
//         font-size: 18px;
//         font-weight: 100;
//       }
//       button{
//         font-family: "Euclid";
//         font-size: 17px;
//         width: fit-content;
//         border: none;
//         color: #fff;
//         background-color: #aa9ee3;
//         border-radius: 0.5rem;
//         padding: 1rem 4.5rem;
//         margin-top: 1.5rem;
//         cursor: pointer;
//         transition: all .1s;
//         &:hover{
//           background-color: #8579c2;
//         }
//       }
//     }
//   }
//   @media screen and (max-width:1024px){
//     padding-bottom: 5rem;
//     z-index: -2;
//     background-color: #f8f8f8;
//     .bg{
//       z-index: 1;
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       align-items: center;
//       .figures3{
//         display: none;
//       }
//       .robots{
//         /* border: 1px solid red; */
//         width: 300px;
//         height: 300px;
//         background: url(${robots});
//         background-repeat: no-repeat;
//         background-size: contain;
//         transform: scale(1.35) translateX(0rem) translateY(10rem);
//       }
//       .text{
//         display: flex;
//         flex-direction: column;
//         text-align: center;
//         width: 90%;
//         margin-top: 2rem;
//         h1{
//           color: #4f4f4f;
//           font-size: 24px;
//           transform: translateY(-19rem);
//         }
//         p{
//           color: #828282;
//           margin-top: 8rem;
//           line-height: 1.5rem;
//           font-size: 18px;
//           font-weight: 100;
//         }
//         button{
//           font-family: "Euclid";
//           width: fit-content;
//           border: none;
//           color: #fff;
//           background-color: #aa9ee3;
//           border-radius: 0.5rem;
//           padding: 1rem 3.5rem;
//           /* font-size: 20px; */
//           margin: 0 auto;
//           margin-top: 1.5rem;
//           cursor: pointer;
//           transition: all .1s;
//           :hover{
//             background-color: #8579c2;
//           }
//         }
//       }
//     }
//   }
//   @media screen and (max-width:450px){
//     .bg{
//       .robots{
//         width: 250px;
//       }
//       .text{
//         p{
//           margin-top: 4rem;
//         }
//       }
//     }
//   }
//   @media screen and (max-width:350px){
//     .bg{
//       .robots{
//         width: 200px;
//       }
//       .text{
//         p{
//           margin-top: 2rem;
//         }
//       }
//     }
//   }
// `

// const ThirdPart = () => {
//   return(
//     <ThirdPartStyle>
//       <div className="arrowDiv">
//         <img className="arrows" src={arrows} alt="" />
//       </div>
//       <h1>Better Future for Your Kids</h1>
//       <div className="wrapper">
//         <div className="x">
//           <img src={g1} alt="" />
//           <div>
//             <h3>Keyfiyyət</h3>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quam neque dolorum molestias corrupti quia asperiores.</p>
//           </div>
//         </div>
//         <div className="x">
//           <img src={g2} alt="" />
//           <div>
//             <h3>Müştəri məmnuniyyəti</h3>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quam neque dolorum molestias corrupti quia asperiores.</p>
//           </div>
//         </div>
//         <div className="x">
//           <img src={g3} alt="" />
//           <div>
//             <h3>Kreativ yanaşma</h3>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quam neque dolorum molestias corrupti quia asperiores.</p>
//           </div>
//         </div>
//         <div className="x">
//           <img src={g4} alt="" />
//           <div>
//             <h3>Kreativ yanaşma</h3>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quam neque dolorum molestias corrupti quia asperiores.</p>
//           </div>
//         </div>
//       </div>
//     </ThirdPartStyle>
//   )
// }

// const ThirdPartStyle = styled.div`
//   margin-bottom: 18rem;
//   width: 100%;
//   .arrowDiv{
//     display: flex;
//     justify-content: center;
//     width: 100%;
//     .arrows{
//       width: 100%;
//       margin-top: 3rem;
//       position: absolute;
//     }
//   }
//   h1{
//     text-align: center;
//     color: #4f4f4f;
//   }
//   .wrapper{
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     grid-gap: 0 2.5rem;
//     transform: scale(1.1) translateX(.1rem);
//     div:nth-child(2){
//       transform: translateY(5rem);
//     }
//     div:nth-child(4){
//       transform: translateY(5rem);
//     }
//     .x{
//       display: flex;
//       border-radius: 0.5rem;
//       box-shadow: 0 10px 20px 0px #00000022;
//       margin: 3rem 0;
//       padding: 1.5rem 2rem 1.3rem 2rem;
//       img{
//         height: min-content;
//         margin-right: 1rem;
//       }
//       div{
//         transform: translateY(0);
//       }
//       h3{
//         margin: 0;
//         color: #4f4f4f;
//         font-weight: 500;
//       }
//       p{
//         color: #828282;
//         margin-bottom: 0.5rem;
//       }
//     }
//   }
//   @media screen and (max-width:1024px){
//     margin-bottom: 5rem;
//     width: 100%;
//     background-color: #fff;
//     .arrowDiv{
//       display: none;
//     }
//     h1{
//       width: 70%;
//       font-weight: 500;
//       text-align: center;
//       color: #4f4f4f;
//       margin: 4rem auto;
//     }
//     .wrapper{
//       width: 80%;
//       margin: 0 auto;
//       display: grid;
//       grid-template-columns: 1fr;
//       grid-gap: 0 2.5rem;
//       transform: scale(1.1) translateX(.1rem);
//       div:nth-child(2){
//         transform: translateY(0rem);
//       }
//       div:nth-child(4){
//         transform: translateY(0rem);
//       }
//       .x{
//         display: block;
//         box-shadow: 0 0px 20px 0px #00000011;
//         margin: 1rem 0;
//         padding: 1.5rem 1.5rem 1.3rem 1.5rem;
//         img{
//           height: min-content;
//           margin-right: 1rem;
//           margin-bottom: 1rem;
//         }
//         div{
//           transform: translateY(0);
//         }
//         h3{
//           margin: 0;
//           color: #4f4f4f;
//           font-weight: 500;
//         }
//         p{
//           color: #828282;
//           margin-bottom: 0.5rem;
//         }
//       }
//     }
//   }
// `

// const ForthPart = () => {
//   return (
//     <ForthPartStyle>
//       <div className="arrowDiv1">
//         <img className="arrows" src={figures3} alt="" />
//       </div>
//       <div className="arrowDiv2">
//         <img className="arrows" src={figures3} alt="" />
//       </div>
//       <div className="wrapper">
//         <div className="telim">
//           <div className="img">
//             <img src={figures1} alt="" />
//           </div>
//           <h2>Təlim proqramı</h2>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quam neque dolorum molestias corrupti.</p>
//           <div>
//           <div className="selectdiv">
//             <label>
//                 <select name="occupation">
//                   <option label="" value="">Choose a topic</option>
//                   <option label="" defaultValue="UX Designer">UX Designer</option>
//                 </select>
//                 <span>{ArrowChevron(0.9)}</span>
//             </label>
//           </div>
//           </div>
//         </div>
//         <div className="test">
//           <div className="img">
//             <img src={figures2} alt="" />
//           </div>
//           <h2>Test və yarışlar</h2>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quam neque dolorum molestias corrupti.</p>
//           <div>
//             <div className="selectdiv">
//               <label>
//                   <select name="occupation">
//                     <option label="" value="">Choose a topic</option>
//                     <option label="" defaultValue="UX Designer">UX Designer</option>
//                   </select>
//                   <span>{ArrowChevron(0.9)}</span>
//               </label>
//             </div>
//           </div>
//         </div>
//       </div>
//     </ForthPartStyle>
//   )
// }

// const ForthPartStyle = styled.div`
//   margin-bottom: 12rem;
//   width: 100%;
//   .wrapper{
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     grid-gap: 5rem;
//     align-items: center;
//     text-align: center;
//     div{
//       input,select{
//         font-family: "Euclid";
//         padding: .8rem 1.5rem;
//         margin: .7rem 0;
//         border-radius: 0.4rem;
//         border: 1px solid #aaa;
//         font-size: 15px;
//         color: #777;
//         appearance: none;
//       }
//     }
//     h2{
//       color: #4f4f4f;
//     }
//     p{
//       color: #828282;
//     }
//     .img{
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       min-height: 15rem;
//     }
//     .telim,.test{
//       .selectdiv{
//         position: relative;
//         display: flex;
//         max-width: 300px;
//         margin: 0 auto;
//         z-index: 5;
//         label{
//           width: 100%;
//           span{
//             right: 1.6rem;
//             top: .6rem;
//             height: 34px;
//             padding: 15px 0px 0px 8px;
//             position: absolute;
//             pointer-events: none;
//           }
//         }
//         select{
//           background-color: #fff;
//           width: 100%;
//           -webkit-appearance: none;
//           -moz-appearance: none;
//           appearance: none;
//           & ::-ms-expand {
//             display: none;
//           }
//         }
//       }
//     }
//   }
//   .arrowDiv1{
//     display: flex;
//     justify-content: center;
//     width: 100%;
//     .arrows{
//       left: 7%;
//       width: 10%;
//       margin-top: -7rem;
//       position: absolute;
//       transform: rotate(-150deg);
//     }
//   }
//   .arrowDiv2{
//     display: flex;
//     justify-content: center;
//     width: 100%;
//     .arrows{
//       right: 2%;
//       transform: translateY(11rem);
//       width: 20%;
//       margin-top: 3rem;
//       position: absolute;
//     }
//   }
//   @media screen and (max-width:1024px){
//     margin-bottom: 0rem;
//     width: 100%;
//     background-color: #f8f8f8;
//     .wrapper{
//       display: grid;
//       grid-template-columns: 1fr;
//       grid-gap: 0rem;
//       align-items: center;
//       text-align: center;
//       padding: 2rem 0 0 0;
//       div{

//         input,select{
//           font-family: "Euclid";
//           padding: .8rem 1.5rem;
//           margin: .7rem 0;
//           border-radius: 0.4rem;
//           border: 1px solid #aaa;
//           font-size: 15px;
//           color: #777;
//           appearance: none;
//         }
//       } 
//       h2{
//         color: #4f4f4f;
//       }
//       p{
//         color: #828282;
//       }
//       .img{
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         min-height: 15rem;
//       }
//       .telim,.test{
//         background-color: #fff;
//         margin: 1rem;
//         border-radius: 0.5rem;
//         padding: 1rem;
//         padding-top: 0;
//         padding-bottom: 2rem;
//         div{
//           width: 95%;
//           margin: 0 auto;
//         }
//         .selectdiv{
//           position: relative;
//           display: flex;
//           max-width: 300px;
//           margin: 0 auto;
//           label{
//             width: 100%;
//             span{
//               right: 1.6rem;
//               top: .6rem;
//               height: 34px;
//               padding: 15px 0px 0px 8px;
//               position: absolute;
//               pointer-events: none;
//             }
//           }
//           select{
//             width: 100%;
//             -webkit-appearance: none;
//             -moz-appearance: none;
//             appearance: none;
//             & ::-ms-expand {
//               display: none;
//             }
//           }
//         }
//       }
//     }
//     .arrowDiv1{
//       display: none;
//     } 
//     .arrowDiv2{
//       display: none;
//     } 
//   }
// `

const Newsletter = () => {
  return (
    <NewsletterStyle>
      <div className="wrapper">
        <div className="img">
        </div>
        <div className="inside">
          <h2>Sign up to our newsletter</h2>
          {/* <h3>Recieve latest news, updates and other news</h3> */}
          <div>
            <input type="text" placeholder="Enter your email address"/>
            <button>Abunə ol</button>
          </div>
        </div>
      </div>
    </NewsletterStyle>
  )
}

const NewsletterStyle = styled.div`
  padding-bottom: 12rem;
  text-align: center;
  z-index: 2;
  border: 1px solid transparent;
  position: relative;
  .wrapper{
    width: 100%;
    margin: 0 auto;
    transform: scale(1.05);
    .img{
      z-index: 1;
      background: url(${rectangle}) no-repeat;
      background-size: contain;
      width: 100%;
      height: 500px;
    }
    .inside{
      margin-top: -27rem;
      h2{
        color: #4f4f4f;
      }
      h3{
        color: #828282;
        font-weight: 400;
        font-size: 20px;
      }
      div{
        margin-top: 3rem;
        input{
          font-weight: 400;
          border: none;
          background: #fff;
          margin: .25rem;
          padding: 1rem;
          border-radius: 0.4rem;
          min-width: 280px;
          font-family: "Euclid";
        }
        button{
          font-family: "Euclid";
          font-weight: 400;
          padding: 1rem;
          border: none;
          background: #ffe01b;
          border-radius: 0.4rem;
          margin: .25rem;
          cursor: pointer;
          :hover{
            background: #f0d000;
          }
        }
      }
    }
  }
  @media screen and (max-width:1024px){
    padding-bottom: 2rem;
    text-align: center;
    z-index: 2;
    background-color: #fbf5f1;
    border: 1px solid transparent;
    .wrapper{
      width: 100%;
      margin: 0 auto;
      .img{
        display: none;
      }
      .inside{
        margin-top: 0;
        h2{
          color: #4f4f4f;
          display: none;
        }
        h3{
          color: #000;
          font-weight: 400;
          width: 70%;
          margin: 2rem auto 0rem auto;
        }
        div{
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          width: 90%;
          margin: 0 auto;
          margin-top: 2rem;
          input{
            font-weight: 500;
            border: none;
            background: #fff;
            margin: .25rem;
            padding: 1rem;
            border-radius: 0.4rem;
            min-width: 160px;
            width: 50%;
            font-family: "Euclid";
          }
          button{
            font-family: "Euclid";
            font-weight: 500;
            padding: 1rem;
            border: none;
            background: #ffe01b;
            border-radius: 0.4rem;
            margin: .25rem;
            cursor: pointer;
            :hover{
              background: #f0d000;
            }
          }
        }
      }
    }
  }
`