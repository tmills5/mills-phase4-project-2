import React from "react";
import Card from "./Card"





function Discover( {parks, setParks} ) {
      console.log(parks)

    return(
        <div className="park-list-container">
            {parks.map(park=> (
                <Card park={park} key={park.id}/>
            ))}
        </div>

    );
};

export default Discover;