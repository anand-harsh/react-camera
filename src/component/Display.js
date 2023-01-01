import React, { Component } from "react";
import {useNavigate} from "react-router-dom"

const  Display = () => {


    
  const navigate=useNavigate();
  function handleClick(){
    navigate("/")
  }

    return (
      <div>
        <div className="welcome">
          Congragulations, You Have Successfully Registered
        </div>
        <button type="submit" onClick={handleClick}>Go Back</button>
      </div>
    );
  
}

export default Display;
