import React, { useState }from 'react';

function AddParkForm( {handlePost, errors, navigate}) {
    const [formData, setFormData] = useState({
        full_name:'',
        state:'',
        description:'',
        activities:'',
        image:''
      })

      function onSubmit(e){
        e.preventDefault()

        const park = {
          full_name: formData.full_name,
          state: formData.state,
          description: formData.description,
          activities: formData.activities,
          image: formData.image,
          fee: formData.fee
        }
        handlePost(park)
        navigate('/parks')
      }

    return(
        <>
        {errors?errors.map(e => <div>{e}</div>):null}
       <form onSubmit={onSubmit}>
       <label>
          Title
          <br/>
          <input className='add-form-title' type="text-box" value={formData.full_name} onChange={(e) => setFormData({...formData, full_name: e.target.value})} />
        </label>
        <br/>
        <label>
        State
        <br/>
          <input className='add-form-state' type="text" value={formData.state} onChange={(e) => setFormData({...formData, state: e.target.value})} />
        </label>
        <br/>
        <label>
        Description
        <br/>
          <textarea className='add-form-description' type="text" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} />
        </label>
        <br/>
        <label>
        Activities
        <br/>
          <textarea className='add-form-activities' type="text" value={formData.activities} onChange={(e) => setFormData({...formData, activities: e.target.value})} />
        </label>
        <br/>
        <label>
        Image
        <br/>
          <input className='add-form-image' type="text" value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} />
        </label>
        <br/>
        <label>
        Pass Fee
        <br/>
          <input className='add-form-fee' type="text" value={formData.fee} onChange={(e) => setFormData({...formData, fee: e.target.value})} />
        </label>
        <br/>
        <input type="submit" value="Submit Park" />
       </form>
        </>
    )
}

export default AddParkForm;