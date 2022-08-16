import React, { useState }from 'react';
import {useLocation} from "react-router-dom";


function EditParkForm( {onUpdatePark, errors, navigate }) {
    const location = useLocation();
    const {park} = location.state
    console.log(park)

    const { full_name, state, description, activities, image, url } = park

    const [formData, setFormData] = useState( {park} )

      function handleParkUpdate(e){
        e.preventDefault()

        fetch(`/parks/${park.id}}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                full_name: formData.full_name,
                state: formData.state,
                description: formData.description,
                activities: formData.activities,
                image: formData.image,
                url: formData.url,
            }),
        })
            .then(res => res.json())
            .then((updatedPark) => {
                // console.log(updatedPark)
                onUpdatePark(updatedPark)
            })
            navigate("/parks")
      }

    return(
        <>
        {errors?errors.map(e => <div>{e}</div>):null}
       <form onSubmit={handleParkUpdate}>
       <label>
          Title
          <br/>
          <input className='add-form-title' type="text-box" defaultValue={full_name} onChange={(e) => setFormData({...formData, full_name: e.target.value})} />
        </label>
        <br/>
        <label>
        State
        <br/>
          <input className='add-form-state' type="text" defaultValue={state} onChange={(e) => setFormData({...formData, state: e.target.value})} />
        </label>
        <br/>
        <label>
        Description
        <br/>
          <textarea className='add-form-description' type="text" defaultValue={description} onChange={(e) => setFormData({...formData, description: e.target.value})} />
        </label>
        <br/>
        <label>
        Activities
        <br/>
          <textarea className='add-form-activities' type="text" defaultValue={activities} onChange={(e) => setFormData({...formData, activities: e.target.value})} />
        </label>
        <br/>
        <label>
        Image URL
        <br/>
          <input className='add-form-image' type="text" defaultValue={image} onChange={(e) => setFormData({...formData, image: e.target.value})} />
        </label>
        <br/>
        <label>
        Park URL
        <br/>
          <input className='add-form-fee' type="text" defaultValue={url} onChange={(e) => setFormData({...formData, fee: e.target.value})} />
        </label>
        <br/>
        <input type="submit" value="Update Park" />
       </form>
        </>
    )
}

export default EditParkForm;