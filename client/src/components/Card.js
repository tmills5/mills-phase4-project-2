import React from "react";
import {Link} from "react-router-dom";




function Card( { park } ) {
    const { id, full_name, state, description, image} = park


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
                            {full_name} / <small>{state}</small>
                    <br/>
                            {description}
                        </p>
                        <Link to={`/parks/${id}`}  state={{park}} >Click for more details..</Link>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default Card;