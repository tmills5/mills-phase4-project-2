import React from "react";
import { Link } from 'react-router-dom';


function Logout () {

    return(
        <div className="container is-fluid">
            <div className="notification is-primary">
                <h1 className="exit-text">Come back soon...</h1>
                <Link to='/'>Home</Link>
            </div>
        </div>
    );
}

export default Logout;