import React, {useState} from 'react'


function Login( {setUser, navigate, errors, setErrors} ) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) =>{
        e.preventDefault()
        navigate('/parks')

        let user = {
            username,
            password
        }
        
        fetch(`/login`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
          if(res.ok){
            res.json()
            .then(user=>{
              console.log(user)
              setUser(user)
              
            })
            
          } else {
            res.json()
            .then(json => setErrors(json.error))
          }
        });

        console.log(errors)
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
        </div>
      </div>
    );
  }

  export default Login;