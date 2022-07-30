
import React from "react";
import { Link } from "react-router-dom";
// import Login from './Login';


function Home( {parks} ) {
  console.log(parks.data)
  const parksData = parks.data

  return(

    <>
      <h1>HOMEPAGE</h1>
    </>
    
  )
}

export default Home;