import React from "react";
import {Link} from "react-router-dom";
import ParkDetail from "./ParkDetail";



function Card( {park} ) {
    const { fullName, states, description, id, latLong, images} = park
    // console.log(park)
    // const click = <ParkDetail />
    return(
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={images[0].url} alt="{images[0].altText}"/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{fullName}</strong> / <small>{states}</small> <small>----{latLong}----</small>
                    <br/>
                            {description}
                        </p>
                        <Link to={`/parks/${id}`} element={ <ParkDetail /> }>Click for more details..</Link>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default Card;