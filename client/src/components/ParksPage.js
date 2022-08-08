import React, { useState } from "react";
import ParkCard from "./ParkCard"



function ParksPage( {parks, user} ) {
    // const [parkNameQuery, setParkNameQuery] = useState("");

    // const filteredParksArray = !parkNameQuery ? parks : [...parks].filter(park=>
    //     park.full_name.toLowerCase().includes(parkNameQuery.toLocaleLowerCase()))

// console.log(parks[0][fullName])


    return(
        <div>
            {user ?
            <div className="park-list-container">
            {/* <input 
            className="input is-primary" 
            type="text" 
            placeholder="Search for parks..." 
            value={parkNameQuery} 
            onChange={(e)=> setParkNameQuery(e.target.value)}
            ></input> */}

            {parks.map(park=> (<ParkCard key={park.id} park={park} />))}
            </div>
            :
            <p style={{"textAlign": "center"}}>Please Sign up or Log in...</p>
            }
        </div>


        // <div className="park-list-container">
        //     <input 
        //     className="input is-primary" 
        //     type="text" 
        //     placeholder="Search for parks..." 
        //     value={parkNameQuery} 
        //     onChange={(e)=> setParkNameQuery(e.target.value)}
        //     ></input>

        //     {filteredParksArray.map(park=> (
        //         <Card key={park.id} park={park} />
        //     ))}
        // </div>

    );
};

export default ParksPage;