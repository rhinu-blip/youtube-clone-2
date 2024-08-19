import React from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { name } = useParams(); 

  return (
    <div>
      <h1>{name} Category</h1>
      
    </div>
  );
};

export default CategoryPage;
