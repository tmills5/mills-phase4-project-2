import React, {useState} from "react";
import { Link } from 'react-router-dom';
import ParkCard from "./ParkCard";


function ParksPage( {parks, user, onDeletePark, onUpdatePark} ) {
    console.log(parks)
    const [parkNameQuery, setParkNameQuery] = useState("");

    const queryParksArray = !parkNameQuery ? parks : [...parks].filter(park=>
        park.full_name.toLowerCase().includes(parkNameQuery.toLocaleLowerCase()))


    return(
        <>
            {user ?
                <div>
                    {user.is_admin ? 
                    <div className="button is-rounded"><Link to='/parks/new'>Add Park</Link></div>
                    :
                    ""}
                    <div className="park-list-container">
                        <input 
                        className="input is-primary" 
                        type="text" 
                        placeholder="Search for parks..." 
                        value={parkNameQuery} 
                        onChange={(e)=> setParkNameQuery(e.target.value)}
                        ></input>

                    {queryParksArray.map(park=> (
                        <div key={park.id}>
                            <ParkCard park={park} user={user} onDeletePark={onDeletePark} onUpdatePark={onUpdatePark}/>
                        </div>
                        ))}
                    </div>
                </div>

            :

            <div>Please Sign up or Log in to Discover...</div>
            }
        </>
    );
};

export default ParksPage;