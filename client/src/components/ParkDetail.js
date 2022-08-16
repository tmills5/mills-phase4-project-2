import React, { useState, useEffect } from "react";
import {useLocation, Link, useParams} from 'react-router-dom';



function ParkDetail({user}) {
  // console.log(user)
// console.log(parks)
  // passing individual park info through Link-RouterV6 way
//   const location = useLocation();
//   const {park} = location.state
const [park, setPark] = useState({});
const params = useParams();
const { id, full_name, state, description, activities, image, url} = park
// console.log(activities)
// console.log(park.passes[0]["price"])
//   let price = park.passes[0]["price"]


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
          {/* {parks.filter(park=> park.id === id).map(park=> (<p>{park.full_name}</p>))} */}
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

       <div className="content"> {description}
             <br/>
         <a href={url}>{url}</a>
         <div className="activities"><u>Activities:</u> 
        <br/>
         {activities}
         </div>
         {/* <div>Park Pass Fee: ${price}</div> */}
         <br/>
         {user && user.is_admin ? <button><Link to={`/parks/${id}/edit`} state={{park}}>Edit Park</Link></button> : ""}
       </div>
      {/* {user && user.is_admin ? <Link to="/parks/:id/edit" state={{park}}>Edit</Link> : ""} */}
     </div>
    </>





    // <>
    //   <div className="card">
    //     <div className="card-image">
    //           <figure className="image is-128x128">
    //             <img src={image} alt=""/>
    //           </figure>
    //     </div>
    //     <br/>
    //     <div className="card-content">

    //       <div className="media-content">
    //         <p className="title is-2">{full_name}</p>
    //         <p className="subtitle is-4">{state}</p>
    //       </div>
    //     </div>

    //     <div className="content"> {description}
    //           <br/>
    //       <a href={url}>{url}</a>
    //       <div className="activities"><u>Activities:</u> 
    //       <br/>
    //       {activities}
    //       </div>
    //       {/* <div>Park Pass Fee: ${price}</div> */}
    //       <br/>
    //       {user && user.is_admin ? <button><Link to="/parks/:id/edit" state={{park}}>Edit Park</Link></button> : ""}
    //     </div>
    //     {/* {user && user.is_admin ? <Link to="/parks/:id/edit" state={{park}}>Edit</Link> : ""} */}
    //   </div>
    //   <br/>
    // </>
  )
}
export default ParkDetail;