import React from "react";
import { Link } from 'react-router-dom';


function Navigation( { user, setUser } ) {
  // console.log(user.name)

    const logout = () => {
        fetch('/logout', {
          method: 'DELETE'
        })
          .then(()=>{
            setUser()
          }
          );
      }


  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href='/'>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">

          <div className="navbar-item">
            <Link to='/'>Home</Link>
          </div>

          <div className="navbar-item" href='/'>
            <Link to='/parks'>Parks</Link>
          </div>


          <div className="navbar-item" onClick={logout}>
            <Link to='/logout'>Log Out</Link>
          </div>

      </div>
      <div className="nav-title">
        ParkIt
        
      </div>
      <p>Welcome..{user ? user.name : ''}</p>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
              </div>
              <div className="button is-rounded" href='/'>
                <Link to='/signup'><strong>Sign up</strong></Link>
              </div>
              <div className="button is-rounded is-success">
                <Link to='/login'><strong>Log in</strong></Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
};

export default Navigation;