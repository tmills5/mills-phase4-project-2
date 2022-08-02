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
          <container>
            <img
              className="child-div-image"
              src="https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Mountain View from Ground"
            />
          </container>
          {/* <p class="title">
            Hero title
          </p>
          <p class="subtitle">
            Hero subtitle
          </p> */}
        </div>
      </section>
      {/* <div className="home-child-div-1">

      </div> */}

      <div className="parks-container">
        <h1>Parks Container</h1>
        {/* {showTestParks} */}

      </div>
      
      <div className="home-child-div-3">
        <h1>THIRD</h1>
      </div>
    </div>
    
  )
}

export default Home;