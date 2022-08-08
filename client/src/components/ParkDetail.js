import React, {useState} from "react";
import {useLocation, Link} from 'react-router-dom';

import EditReviewForm from './EditReviewForm'


function ParkDetail( {user, setReviews} ) {
  console.log(user)
  const [newReviewContent, setNewReviewContent] = useState('');
  // const [editMode, setEditMode] = useState(false);
  // passing individual park info through Link-RouterV6 way
  const location = useLocation();
  const {park} = location.state

  const {full_name, state, description, image, url, reviews} = park
// editing the reviews that logged in user submitted
  // const toggleEditMode = () => {setEditMode(!editMode)}


 

  //   const reviewEdit = () => editMode ? (
  //   <input
  //     type="text"
  //     value={newReviewContent}
  //     onChange={(e) => setNewReviewContent(e.target.value)}
  //     onBlur={toggleEditMode}
  //   />
  // ) : (
  //   <span onClick={toggleEditMode}>{newReviewContent}</span>
  // )



  const individualReviewArray = reviews.map(review=> (
    <>
    <li> {review["content"]}</li>
    if {user.id === review.user_id  ? <Link to="/EditReviewForm" >Edit</Link> : null}
    </>
  ))

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    let newReview = {
      content: newReviewContent,
      user_id: user.id,
      park_id: park.id
    }

    fetch(`/reviews`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
    },
    body: JSON.stringify(newReview)
    })
    .then(r=>r.json())
    .then(newReview => {
      console.log(newReview)
      setReviews([...individualReviewArray, newReview])
      setNewReviewContent("")
    })
  }


  return(
    <>
      <div className="card">
        <div className="card-image">
              <figure className="image is-128x128">
                <img src={image} alt=""/>
              </figure>
        </div>

        <div className="card-content">

          <div className="media-content">
            <p className="title is-4">{full_name}</p>
            <p className="subtitle is-6">{state}</p>
          </div>
        </div>

        <div className="content"> {description}
              <br/>
          <div>{url}-----fake url</div>
          <div>Reviews: {individualReviewArray}</div>
        </div>
      </div>
      <br/>

      Did you visit this Park? Let others know what you think..
      <form  onSubmit={handleReviewSubmit}>
        <input 
        type="text-area"
        className="review-textarea"
        placeholder="Add Review..." 
        value={user.newReviewContent} 
        onChange={(e)=>setNewReviewContent(e.target.value)}
        />
      </form>
    </>
  )
}
export default ParkDetail;