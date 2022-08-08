import React, { useState } from "react";
import ParkCard from "./ParkCard";
import Login from './Login'



function ParksPage( {parks, user, isAuthenticated, setIsAuthenticated, setUser} ) {
    // const [parkNameQuery, setParkNameQuery] = useState("");

    // const filteredParksArray = !parkNameQuery ? parks : [...parks].filter(park=>
    //     park.full_name.toLowerCase().includes(parkNameQuery.toLocaleLowerCase()))

// console.log(parks[0][fullName])

if (!user) return <Login setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;

    return(
        <div>
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