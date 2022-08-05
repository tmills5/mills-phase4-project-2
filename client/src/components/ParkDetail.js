import React from "react";
import {useLocation} from 'react-router-dom';


function ParkDetail() {
  const location = useLocation();
  const {park} = location.state
    console.log(park)

    const {fullName, state, description, image, url} = park

    const allReviews = park.reviews.map(i=> (
      <li> {i["content"]}</li>
    ))

    
    return(
        <>
            <div className="card">
  <div className="card-image">
    <figure className="image is-128x128">
      <img src={image} alt=""/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-left">
      </div>
      <div className="media-content">
        <p className="title is-4">{fullName}</p>
        <p className="subtitle is-6">{state}</p>
      </div>
    </div>

    <div className="content">
      {description}
      <br/>
      <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      <div>{url}-----fake</div>
      <div>{allReviews}</div>
    </div>
  </div>
</div>
        </>
    )
}
export default ParkDetail;