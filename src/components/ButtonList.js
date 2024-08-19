import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Button from "./Button.js";
import { clearAllListeners } from "@reduxjs/toolkit";

const buttonNames = [
  "All", "Live", "Gaming", "Songs", "Soccer", "Cooking", "Coding", "News",
  "Travel", "Education", "Fitness", "Comedy", "Technical"
];

const ButtonList = () => {
  const [activeButton, setActiveButton] = useState("All");
  const navigate = useNavigate(); 

  const handleClick = (name) => {
    setActiveButton(name);
    
    const routes = {
      "All": "/all",
      "Live": "/live",
      "Gaming": "/gaming",
      "Songs": "/songs",
      "Soccer": "/soccer",
      "Cooking": "/cooking",
      "Coding": "/coding",
      "News": "/news",
      "Travel": "/travel",
      "Education": "/education",
      "Fitness": "/fitness",
      "Comedy": "/comedy",
      "Technical": "/technical",
      "Selfcare":"/selfcare",
      "TeleCommunication":"/telecommunication"
    };
    
    
    navigate(routes[name] || "/");
  };

  return (
    <div className=" whitespace-nowrap p-4">
      <div className="flex space-x-4">
        {buttonNames.map((name) => (
          <Button
            key={name}
            name={name}
            isActive={name === activeButton}
            onClick={() => handleClick(name)}
          />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;


