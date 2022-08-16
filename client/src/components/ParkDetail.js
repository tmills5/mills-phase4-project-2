import React from "react";
import {useLocation, Link} from 'react-router-dom';



function ParkDetail( {user} ) {
  // console.log(user)

  // passing individual park info through Link-RouterV6 way
  const location = useLocation();
  const {park} = location.state
 console.log(park)
  const { full_name, state, description, activities, image, url} = park
// console.log(activities)
// console.log(park.passes[0]["price"])
  let price = park.passes[0]["price"]
  return(
    <>
      <div className="card">
        <div className="card-image">
              <figure className="image is-128x128">
                <img src={image} alt=""/>
              </figure>
        </div>
        <br/>
        <div className="card-content">

          <div className="media-content">
            <p className="title is-2">{full_name}</p>
            <p className="subtitle is-4">{state}</p>
          </div>
        </div>

        <div className="content"> {description}
              <br/>
          <a href={url}>{url}</a>
          <div className="activities"><u>Activities:</u> 
          <br/>
          {activities}
          </div>
          <div>Park Pass Fee: ${price}</div>
          <br/>
          {user && user.is_admin ? <button><Link to="/parks/:id/edit" state={{park}}>Edit Park</Link></button> : ""}
        </div>
        {/* {user && user.is_admin ? <Link to="/parks/:id/edit" state={{park}}>Edit</Link> : ""} */}
      </div>
      <br/>
    </>
  )
}
export default ParkDetail;