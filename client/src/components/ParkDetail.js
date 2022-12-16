import React, { useState, useEffect } from "react";
import { Link, useParams} from 'react-router-dom';

function ParkDetail({user}) {
    const [park, setPark] = useState({});
    const params = useParams();
    const { id, full_name, state, description, activities, image, url} = park
    console.log(park)

// grabbing the id with params on page load
    useEffect(()=>{
        fetch(`/parks/${params.id}`)
            .then(res => res.json())
            .then(data => {
    //   console.log(data)
        setPark(data)
        })
    },[params.id])


  return(
    <>
     <div key={id} className="card">
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

       <div className="content"> 
            {description}
            <br/>
        <a href={url}>{url}</a>
        <div className="activities">
            <u>Activities:</u> 
            <br/>
            {activities}
        </div>
            <br/>
            {/* sending park as props through link-have to save its state-React Router v6?? */}
         {user && user.is_admin ? <button><Link to={`/parks/${id}/edit`} state={{park}}>Edit Park</Link></button> : ""}
       </div>
     </div>
    </>
  )
}
export default ParkDetail;