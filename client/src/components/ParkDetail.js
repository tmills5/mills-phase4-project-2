import React from "react";
import {useLocation} from 'react-router-dom';


function ParkDetail() {
  const location = useLocation();
  const {park} = location.state
    console.log(park)

    const {full_name, state, description, image, url} = park

    const allReviews = park.reviews.map(i=> (
      <li key={park.reviews["id"]}> {i["content"]}</li>
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
        <p className="title is-4">{full_name}</p>
        <p className="subtitle is-6">{state}</p>
      </div>
    </div>

    <div className="content">
      {description}
      <br/>
      <div>{url}-----fake url</div>

      <div>Reviews: {allReviews}</div>
    </div>
  </div>
</div>
        </>
    )
}
export default ParkDetail;