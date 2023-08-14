import React from "react";
import './Mselect.css';
import Movie from "../Movieposter/Movie";
// import Drop from "../MovieSelect/Drop";


const Mselect = () => {
  return(
    <>
    <div className="container" > 
      <Movie />
      <div className="mselect" />
    </div>
    {/* 박스 */}
    </>
  );
}

export default Mselect;