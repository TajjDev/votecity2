// import React from 'react'
import './App.css'
import Join from './assets/component/join/Join'
import GetStarted from './assets/component/get started/GetStarted'
import About from './assets/component/about/About'
import Nav from './assets/component/nav/Nav'
import Aboutt from './assets/component2/about us/Aboutt'
// const App = () => {
  // return (
    // <>
    {/* <div> */}
      {/* <Nav></Nav> */}
    {/* </div> */}
    {/* <div id="main"> */}
      {/* <main id='mmm'></main> */}
      {/* <Join></Join> */}
      {/* <GetStarted></GetStarted> */}
      {/* <About></About> */}
    {/* </div> */}
    {/* <Aboutt/> */}
    {/* <About/> */}
    {/* </> */}
  // )
// }
// 
import React, { useState, useEffect } from "react";
import Features from './assets/component2/features/features'
import SwipeableDivs from './assets/component2/how it works/HowItWorks'
import Appp from './assets/component2/how it works/HowItWorks'
import HowItWorks from './assets/component2/how it works/HowItWorks'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2000ms = 2 seconds

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return <MainWebsite />;
}

function LoadingPage() {
  return (
    <div style={styles.loadingPage}>
      <h1 style={styles.title}>Welcome to Votecity</h1>
      <div style={styles.spinner}></div>
    </div>
  );
}

function MainWebsite() {
  return (
    <>
    <Aboutt/>
    <About/>
    <Features/>
    <HowItWorks/>
    </>
  );
}

// Styles for demonstration purposes
const styles = {
  loadingPage: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundImage:"url(/src/assets/back.jpg)",
    color: "#ffffff",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  spinner: {
    display:"flex",
    justifySelf:"end",
    width: "30px",
    height: "30px",
    border: "5px solid rgba(247, 190, 89, 1)",
    borderTop: "5px solid #fff",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};

// Add a spinning animation to the spinner using CSS
const globalStyles = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

// Inject global styles into the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = globalStyles;
document.head.appendChild(styleSheet);

export default App;