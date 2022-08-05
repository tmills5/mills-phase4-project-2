import React from "react";


function Home( {user} ) {


  return(

    <div id="home-parent-div">

      <section className="hero">
        <img src="https://images.pexels.com/photos/8909842/pexels-photo-8909842.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""/>
        <img src="https://images.pexels.com/photos/8909837/pexels-photo-8909837.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""/>
        <img src="https://images.pexels.com/photos/11702767/pexels-photo-11702767.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""/>
        <img src="https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""/>
        <img src="https://images.pexels.com/photos/6272357/pexels-photo-6272357.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""/>
        <img src="https://images.pexels.com/photos/5480815/pexels-photo-5480815.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""/>
      </section>


      <hr/>

      <section className="home-bottom-container">
        <h2><strong className="home-bottom-title">Who we are...</strong></h2>
        <h2>This is a dedicated place for any outdoor parks, trails, or anyplace outdoors really!! <br/>Now that you have found us, why don't you just "ParkIt" for awhile and we'll help with your next adventure!</h2>
        <h2>Sign up or Log in to add new places you have visited and leave reviews...</h2>
        <h2>Use the Discover tab at the top to find new parks!</h2>
      </section>
    </div>
    
  )
}

export default Home;