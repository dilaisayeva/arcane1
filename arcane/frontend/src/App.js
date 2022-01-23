import React, { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Sidebar } from "./Components/Sidebar";
import { Footer } from "./Components/Footer";
import { Landing } from "./Pages/Landing";
import { Home } from "./Pages/Home";





function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
const [tasks,setTasks] = useState( [] )

useEffect(() => {
  const getTasks = async () => {
    const tasksFromServer = await fetchTasks()
    setTasks(tasksFromServer)
  }
  getTasks()
}, [])
const fetchTasks = async () => {
  const res = await fetch('http://127.0.0.1:8000/cars/')
  const data = await res.json()
  return data
}

// category
async function getcategory() {
  const url = await fetch('http://127.0.0.1:8000/category/');
  const response = await url.json();
  console.log(response)
  return response;
}

// phones
async function componentDidMount() {
  const url = await fetch('http://127.0.0.1:8000/phones/');
  const response = await url.json();
  console.log(response)
  return response;
}



// GAMES



// cars
// async  componentDidMount() {
//   const url = await fetch('http://127.0.0.1:8000/cars/');
//   const response = await url.json();
//   console.log(response)
//   return response;
//   }





// async function componentDidMount() {
//   const url = await fetch('http://127.0.0.1:8000/games/');
//   const response = await url.json();
//    this.setState({ posts: response.data })

//   }


// function App1() {
//   const [marka, setMarka] = useState([]);

//   useEffect(() => {
//     const getMarka = async () => {
//       const getFromServer = await getMarka()
//       setMarka(getFromServer)
//     }
//     getMarka()
//   }, [])
// }


// Fetch Tasks

 // Fetch Task
//  const fetchTask = async (id) => {
//   const res = await fetch(`http://localhost:5000/tasks/${id}`)    
//   const data = await res.json()
//   return data
// }


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalStyle>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar register searchbar />
                <Landing />
             {tasks}
                <Footer dark="red" extended />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Navbar searchbar />
                <Home

                />
                <Footer dark="red" extended />
              </>

            }
          />
          <Route
            path="/settings"
            element={
              <>
                <Navbar />
                <div className="mid">
                  <Sidebar />
                  {/* <UserSettings /> */}
                </div>
                <Footer extended />
              </>
            }
          />
          <Route
            path="/assignments"
            element={
              <>
                <Navbar />
                <div className="mid">
                  <Sidebar />
                  {/* <ConsultantAssignments /> */}
                </div>
                <Footer extended />
              </>
            }
          />
        </Routes>
      </GlobalStyle>
    </BrowserRouter>
  );
}

export default App;

const GlobalStyle = styled.div`
  background-color: #f8f8f8;
  .mid {
    display: grid;
    grid-template-columns: 1fr 3.2fr;
    grid-gap: 2rem;
    margin: 2rem auto 9rem auto;
    width: 84%;
  }
  @media screen and (max-width: 1114px) {
    .mid {
      grid-template-columns: 1fr;
      grid-gap: 2rem;
      margin: 2rem auto 9rem auto;
    }
  }
  @media screen and (max-width: 768px) {
    .mid {
      grid-template-columns: 1fr;
      grid-gap: 2rem;
      margin: 2rem auto;
      div:nth-child(1) {
        order: 2;
      }
    }
  }
`;
