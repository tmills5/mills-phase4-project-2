import React from "react";
// import {Link} from "react-router-dom";


function ParkCard( { park, user, onDeletePark } ) {
    const { id, fullName, images, addresses } = park;

    return(
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={images[0].url} alt={images[0].altText}/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{fullName}</strong>
                  
                        </p>
                        {/* <Link to={`/parks/${park.id}`}>Click for more details..</Link> */}
                    <br/>
                        <p>{addresses[0].line1}</p>
                        <p>{addresses[0].city}, {addresses[0].stateCode} {addresses[0].postalCode}</p>
                    </div>
                   
                    <div>{user.is_admin ? 
                        <>
                        <button onClick={()=>onDeletePark(id)}>delete</button>
                        </>
                        : 
                        ''}
                    </div>
                </div>
            </article>
        </div>
    );
}

export default ParkCard;