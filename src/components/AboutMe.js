import React from "react";
import Card from "./Card";
import Jumbotron from "react-bootstrap/Jumbotron";


const AboutMe = (styles) =>{

  const viewPort = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  }

  return (
    <div style={viewPort}>
        <h1 style={{fontSize:"60px"}}>
          Welcome to my Page
        </h1>
        <p style={{fontWeight:"bold"}}>
          I am self-teaching myself Web Development
        </p>
    </div>
  )
};


export default AboutMe;
