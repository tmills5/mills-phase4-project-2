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

          console.log(user.error)
          // need the values from the object. user.error is an object but i need
          // it in an array
          if(user.error) setErrors(Object.values(user.error))
        })

        // console.log(user.error)
        setUsername('');
        setPassword('');
        setErrors([]);
          // navigate('/');
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
          <a href="/signup">Signup!</a>

          {<p style={{ color: "red" }}>
            {errors}
          </p>}
  
        </div>
      </div>
    );
}

  export default Login;