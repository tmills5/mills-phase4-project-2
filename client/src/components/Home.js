import React from "react";
// import { Link } from "react-router-dom";


function Home( {parks} ) {
  console.log(parks.data)
  const parksData = parks.data

  // const showTestParks = parksData.map(park => (
  //   // console.log(park)
  //   <>
  //     <h1>{park.fullName}</h1>
  //   </>
  // ))


  return(
    <div id="home-parent-div">
      <section className="hero">
        <div className="hero-body">
          <h1 className="hero-text">The Great Outdoors...</h1>
          <p className="subtitle">The Solution in Finding National Parks</p>
         </div>
      </section>
      <section className="home-middle">
        <div>

        </div>

      </section>
      
      <div className="home-child-div-3">
        <h1>THIRD</h1>
      </div>
    </div>
    
  )
}

export default Home;