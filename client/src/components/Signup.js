

import React, { useState } from "react";


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
      .then(userEnteredJson => {
        console.log(userEnteredJson)
        if(userEnteredJson.errors) setErrors(Object.entries(userEnteredJson.errors))
      })
      console.log(errors)
      setUsername('');
      setPassword('');
  }

  return (
    <div className="container is-fluid">
      <div className="notification is-primary">
        <h1>Sign Up!!</h1>
        <form onSubmit={onSubmit} >
          <label>
          Username
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
          Password
          <input type="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <input type="submit" value="Sign up!" />
        </form>
      </div>
    </div>
  )
}

export default Signup;