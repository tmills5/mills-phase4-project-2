import React from "react";
import { MDBCard } from 'mdb-react-ui-kit'
// import {Link} from "react-router-dom";


function ParkCard( { park, user, onDeletePark } ) {
    const { id, fullName, images, addresses } = park;

    return(
        <MDBCard className="card text-center">

        <div className="bg-image hover-overlay ripple rounded-circle" data-mdb-ripple-color="light">
          <img src={images[0].url} className="img-fluid" alt='park pic' style={{"height": "250px","width": "250px", "margin": "10px"}} />
            <div className="mask" style={{"backgroundColor": "rgba(251, 251, 251, 0.15)"}}></div>
        </div>
      
        <div className="card-body">
          <h5 className="card-title">{fullName} <hr/></h5>
          <h6> {addresses[0].city}, {addresses[0].stateCode}</h6>
          <p></p>
          <a href=''>
          <button type="button" className="btn btn-primary">More</button>
          </a>
        </div>
        
        </MDBCard>
        // <div className="box">
        //     <article className="media">
        //         <div className="media-left">
        //             <figure className="image is-64x64">
        //                 <img src={images[0].url} alt={images[0].altText}/>
        //             </figure>
        //         </div>
        //         <div className="media-content">
        //             <div className="content">
        //                 <p>
        //                     <strong>{fullName}</strong>
                  
        //                 </p>
        //                 {/* <Link to={`/parks/${park.id}`}>Click for more details..</Link> */}
        //             <br/>
        //                 <p>{addresses[0].line1}</p>
        //                 <p>{addresses[0].city}, {addresses[0].stateCode} {addresses[0].postalCode}</p>
        //             </div>
                   
        //             <div>{user.is_admin ? 
        //                 <>
        //                 <button onClick={()=>onDeletePark(id)}>delete</button>
        //                 </>
        //                 : 
        //                 ''}
        //             </div>
        //         </div>
        //     </article>
        // </div>
    );
}

export default ParkCard;