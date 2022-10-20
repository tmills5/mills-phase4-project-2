import React, {useState} from "react";
import { Link } from 'react-router-dom';
import ParkCard from "./ParkCard";


function ParksPage( {parks, user, onDeletePark, onUpdatePark} ) {
    console.log(user)
    console.log(parks)
    const [parkNameQuery, setParkNameQuery] = useState("");
    // const [activityQuery, setActivityQuery] = useState('');

    const queryParksArray = !parkNameQuery ? parks : [...parks].filter(park=>
        park.full_name.toLowerCase().includes(parkNameQuery.toLocaleLowerCase()))

    // const activityQueryArray = !activityQuery ? parks : [...parks].filter(park=>
    //     park.full_name.toLowerCase().includes(activityQuery.toLocaleLowerCase()))

    // const newObj = {
    //     activityQuery: activityQuery
    // }

    // function onClick() {
    //     console.log(newObj)
    //     fetch('/activities',{
    //         method:'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body:JSON.stringify(newObj)
    //       })
    //       .then(res => res.json())
    //       .then(res => {console.log(res)})
    // }


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
{/* 
                        <input
                            type="text"
                            placeholder="Search for activites..." 
                            value={activityQuery} 
                            onChange={(e)=> setActivityQuery(e.target.value)}
                        />
                        <button onClick={()=>onClick(newObj)}>Submit</button> */}

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