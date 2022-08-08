import React, { useState }from 'react';

function ParkForm( {handlePost, errors}) {
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
          image: formData.image
        }
        handlePost(park)
      }

    return(
        <>
        {errors?errors.map(e => <div>{e}</div>):null}
       <form onSubmit={onSubmit}>
       <label>
          Title
          <input type="text" value={formData.full_name} onChange={(e) => setFormData({...formData, full_name: e.target.value})} />
        </label>
        <br/>
        <label>
        state
          <input type="text" value={formData.state} onChange={(e) => setFormData({...formData, state: e.target.value})} />
        </label>
        <br/>
        <label>
        description
          <input type="number" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} />
        </label>
        <br/>
        <label>
        activities
            <input type="text" value={formData.activities} onChange={(e) => setFormData({...formData, activities: e.target.value})} />
        </label>
        <br/>
        <label>
        Image
          <input type="text" value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} />
        </label>
        <br/>
        <input type="submit" value="Submit Park" />
       </form>
        </>
    )
}

export default ParkForm;