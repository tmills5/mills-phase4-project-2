import React, { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { 
    MDBContainer,
    MDBCol,
    MDBRow
} from "mdb-react-ui-kit";
import { Link } from 'react-router-dom';
import ParkCard from "./ParkCard";


function ParksPage({ user, onDeletePark, onUpdatePark }) {
    // console.log(user)
    const [parkNameQuery, setParkNameQuery] = useState('');
    const [activityQuery, setActivityQuery] = useState('');
    const [activityQueryList, setActivityQueryList] = useState('');
    const [parks, setParks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
    // getting all parks
    fetchParks();
}, [])



    async function fetchParks() {
        setIsLoading(true);
        const response = await fetch("/parks");
        const parksObj = await response.json();

        // console.log("Parks Object: ", parksObj);
        const parks = parksObj.data
        // console.log(parks)
        setParks(parks);
        setIsLoading(false);
        }


    const queryParksArray = !parkNameQuery ? parks : [...parks].filter(park=>
        park.fullName.toLowerCase().includes(parkNameQuery.toLocaleLowerCase()))

    // const activityQueryArray = !activityQuery ? parks : [...parks].filter(park=>
    //     park.fullName.toLowerCase().includes(activityQuery.toLocaleLowerCase()))

    const newObj = {
        activityQuery: activityQuery
    }

    async function onClick() {
        //  console.log(newObj)
        const activityResponse = await fetch('/activities',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(newObj)
          })
          .then(response => response.json())
          .then(activityQueryResp => {
            console.log(activityQueryResp)
            setActivityQueryList(activityQueryResp)
        })
    }

    return(
        <>
            {user ?
                <div>
                    {user.is_admin ? 
                    <div className="button is-rounded"><Link to='/parks/new'>Add Park</Link></div>
                    :
                    ""}
                    <div className="field has add-ons">
                        <div className="control">
                            <label className="label">Simply type to look by Park Name..</label>
                            <input
                                className="input is-normal search-input"
                                type="text" 
                                placeholder="e.g Biscayne National Park"
                                value={parkNameQuery} 
                                onChange={(e)=> setParkNameQuery(e.target.value)}
                            />
                        </div>
                        <div className="control">
                            <label className="label">Or Search by Favorite Activity..</label>
                            <input
                                className="input is-normal search-input"
                                type="text" 
                                placeholder="e.g Fishing"
                                value={activityQuery} 
                                onChange={(e)=> setActivityQuery(e.target.value)}
                            />
                            <span>
                                <button 
                                    className="button"
                                    onClick={()=>onClick(newObj)}
                                >Search..</button>
                            </span>
                            {activityQueryList ?
                            <ul style={{"list-style": "none" }}>
                            {activityQueryList.map(park=> (
                                <li><a href={`/parks/${park.id}`} >{park.full_name}</a></li>
                            ))}
                           </ul>
                            : ""}
                        </div>
                    </div>
                    
                    <MDBContainer>
                        <MDBRow>
                        {isLoading ? <LoadingSpinner /> : queryParksArray.map(park=> (
                            <MDBCol className="col-xl-3 col-md-12 mb-4" key={park.id}>
                                <ParkCard park={park} user={user} onDeletePark={onDeletePark} onUpdatePark={onUpdatePark}/>
                            </MDBCol>
                            ))}
                        </MDBRow>
                    </MDBContainer>

                    </div>

            :

            <div>Please Sign up or Log in to Discover...</div>
            }
        </>
    );
};

export default ParksPage;