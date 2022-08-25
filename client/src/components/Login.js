import React, {useState} from 'react'


function Login( {setUser, navigate} ) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    const onSubmit = (e) =>{
        e.preventDefault()
        let user = {
            username,
            password
        }

        fetch(`/login`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(user => {
          setUser(user);
          // navigate('/parks');
          console.log(user.error)
          // not sure how I did this but 
          if(user.error) setErrors(Object.values(user.error))
        })

        console.log(user.error)
        setUsername('');
        setPassword('');
        setErrors([]);

        // fetch(`/login`,{
        //   method:'POST',
        //   headers:{'Content-Type': 'application/json'},
        //   body:JSON.stringify(user)
        // })
        // .then(res => {
        //   if(res.ok){
        //     res.json()
        //     .then(user=>{
        //       console.log(user)
        //       setUser(user)
        //       navigate('/parks')
        //     })
        //   } else {
        //     // if (user.errors) 
        //     // setErrors((user.errors))
        //     res.json()
        //     .then(json => (
        //        setErrors(json.error)))
        //   }
        // });
    }

        
    return (
      <div className="container is-fluid">
        <div className="notification is-primary">
        <h1>Log In..</h1>
          <form onSubmit={onSubmit}>
            <label>
              Username
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>

            <label>
              Password
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <input type="submit" value="Login" />
          </form>

          {<p style={{ color: "red" }}>
            {errors}
          </p>}
  
        </div>
      </div>
    );
}

  export default Login;