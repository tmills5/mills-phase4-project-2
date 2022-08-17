import React from "react";
import {Link} from "react-router-dom";


function ParkCard( { park, user, onDeletePark } ) {
    const { id, full_name, state, image} = park

    return(
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={image} alt=""/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{full_name}</strong> / <small>{state}</small>
                    <br/>
                        </p>
                        <Link to={`/parks/${park.id}`}>Click for more details..</Link>
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