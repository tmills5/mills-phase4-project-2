

import React, { useState } from "react";
import { Link } from 'react-router-dom';


function Signup() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

  function onSubmit(e){
      e.preventDefault()
      const user = {
          name: username,
          password
      }
     
      fetch(`/users`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(user)
      })
      .then(res => res.json())
      .then(json => {
        console.log(json)
        if(json.errors) setErrors(Object.entries(json.errors))
      })
      console.log(errors)
      setUsername('');
      setPassword('');
  }

  return (
      <> 
      <h1>Sign UP</h1>
      <form onSubmit={onSubmit} >
      <label>
        Username
 
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
       Password
  
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
     
      <input type="submit" value="Sign up!" />
    </form>
    <Link to='/'>Home</Link>
      </>
  )
}

export default Signup;