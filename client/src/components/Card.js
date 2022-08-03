import React from "react";

function Card( {park} ) {
    const { fullName, states, description, latLong, images} = park
    // console.log(images)

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
                            <strong>{fullName}</strong> / <small>{states}</small> <small>----{latLong}----</small>
                    <br/>
                            {description}
                        </p>
                    </div>
                    {/* <nav className="level is-mobile">
                        <div className="level-left">
                            <a className="level-item" aria-label="reply">
            <span className="icon is-small">
              <i className="fas fa-reply" aria-hidden="true"></i>
            </span>
          </a>
          <a className="level-item" aria-label="retweet">
            <span className="icon is-small">
              <i className="fas fa-retweet" aria-hidden="true"></i>
            </span>
          </a>
          <a className="level-item" aria-label="like">
            <span className="icon is-small">
              <i className="fas fa-heart" aria-hidden="true"></i>
            </span>
          </a>
                        </div>
                    </nav> */}
                </div>
            </article>
        </div>
    );
}

export default Card;