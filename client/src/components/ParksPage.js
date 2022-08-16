import React from "react";
import { Link } from 'react-router-dom';
import ParkCard from "./ParkCard";
// import Login from './Login'



function ParksPage( {parks, user, onDeletePark, onUpdatePark} ) {
    console.log(parks)
    // const [parkNameQuery, setParkNameQuery] = useState("");

    // const filteredParksArray = !parkNameQuery ? parks : [...parks].filter(park=>
    //     park.full_name.toLowerCase().includes(parkNameQuery.toLocaleLowerCase()))


    return(
        <>
            {user ?
                <div>
                    {user.is_admin ? 
                    <div className="button is-rounded"><Link to='/parks/new'>Add Park</Link></div>
                    :
                    ""}
                    <div className="park-list-container">
                        {/* <input 
                        className="input is-primary" 
                        type="text" 
                        placeholder="Search for parks..." 
                        value={parkNameQuery} 
                        onChange={(e)=> setParkNameQuery(e.target.value)}
                        ></input> */}

                {parks.map(park=> (
                    <div key={park.id}>
                        <ParkCard park={park} user={user} onDeletePark={onDeletePark} onUpdatePark={onUpdatePark}/>
                {/* <Link to={`/parks/${park.id}`}>More</Link> */}
                    </div>
                ))}
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