import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ParkCard from "./ParkCard";
// import Login from './Login'



function ParksPage( {parks, user, onDeletePark, onUpdatePark} ) {
    // const [parkNameQuery, setParkNameQuery] = useState("");

    // const filteredParksArray = !parkNameQuery ? parks : [...parks].filter(park=>
    //     park.full_name.toLowerCase().includes(parkNameQuery.toLocaleLowerCase()))


    return(
        <>
            {user ?
                <div>
                    {user.is_admin ? <Link to='/ParkForm'>Add Park</Link> : ""}
                    <div className="park-list-container">
                        {/* <input 
                        className="input is-primary" 
                        type="text" 
                        placeholder="Search for parks..." 
                        value={parkNameQuery} 
                        onChange={(e)=> setParkNameQuery(e.target.value)}
                        ></input> */}

                {parks.map(park=> (<ParkCard key={park.id} park={park} user={user} onDeletePark={onDeletePark} onUpdatePark={onUpdatePark}/>))}
                    </div>
                </div>

        :

        <div>Please Sign up or Log in to Discover...</div>

            }

        </>




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