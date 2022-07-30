import React, {useState} from 'react'

function Login() {
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
        .then(json => {
            console.log(json)
            if(json.errors) setErrors(json.errors)
        })
        console.log(errors)
        setUsername('');
        setPassword('');
    }


    // const logout = () => {
    //   fetch('/logout', {
    //     method: 'DELETE'
    //   })
      
    // }

    return (
      <>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
      <label>
        Username
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
       Password
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <input type="submit" value="Login!" />
    </form>
    {/* <button onClick={logout}>Logout</button> */}
    </>
    );
  }

  export default Login;