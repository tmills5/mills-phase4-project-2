import React, {useState} from "react";
import {useLocation, Link} from 'react-router-dom';



function ParkDetail( {user, setReviews} ) {
  console.log(user)
  // const [editMode, setEditMode] = useState(false);
  // passing individual park info through Link-RouterV6 way
  const location = useLocation();
  const {park} = location.state

  const {full_name, state, description, image, url} = park


  return(
    <>
      <div className="card">
        <div className="card-image">
              <figure className="image is-128x128">
                <img src={image} alt=""/>
              </figure>
        </div>

        <div className="card-content">

          <div className="media-content">
            <p className="title is-4">{full_name}</p>
            <p className="subtitle is-6">{state}</p>
          </div>
        </div>

        <div className="content"> {description}
              <br/>
          <div>{url}-----fake url</div>
          <div>Reviews:</div>
        </div>
      </div>
      <br/>
    </>
  )
}
export default ParkDetail;