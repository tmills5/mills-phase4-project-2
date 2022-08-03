import React, {useState} from 'react'

function Login( {user, setUser} ) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
   
    const [errors, setErrors] = useState([])

    function onSubmit(e){
        e.preventDefault()
        let user = {
            username,
            password
        }
       
        console.log(user)

        fetch('/login',{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(user => {
            console.log(user)
            if(user.errors) setErrors(user.errors)
        })
        console.log(errors)
        setUser(user);
        setUsername('');
        setPassword('');
    }


    return (
      <div className="container is-fluid">
        <div className="notification is-primary">
          <h1>Login</h1>
          <form onSubmit={onSubmit}>
            <label>
              Username
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>

            <label>
              Password
            <input type="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <input type="submit" value="Login!" />
          </form>
        </div>
      </div>
    );
  }

  export default Login;