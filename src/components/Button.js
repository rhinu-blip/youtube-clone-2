import React from "react";

const Button = ({ name, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-bold transition duration-200 ease-in-out 
                 ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} 
                 hover:bg-blue-400 hover:text-white focus:outline-none 
                 ${isActive ? 'shadow-md' : 'shadow-sm'}`}
    >
      {name}
    </button>
  );
};

export default Button;



