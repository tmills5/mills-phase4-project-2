import React, { useState } from "react";
import Card from "./Card"



function Discover( {parks, setParks} ) {
    const [parkNameQuery, setParkNameQuery] = useState("");

    const filteredParksArray = !parkNameQuery ? parks : [...parks].filter(park=>
        park.fullName.toLowerCase().includes(parkNameQuery.toLocaleLowerCase()))

// console.log(parks)
    return(
        <div className="park-list-container">
            <input 
            className="input is-primary" 
            type="text" 
            placeholder="Search for parks..." 
            value={parkNameQuery} 
            onChange={(e)=> setParkNameQuery(e.target.value)}
            ></input>

            {filteredParksArray.map(park=> (
                <Card key={park.id} park={park} />
            ))}
        </div>

    );
};

export default Discover;