import React from "react";
import { Link } from 'react-router-dom';


function Navigation() {

    const logout = () => {
        fetch('/logout', {
          method: 'DELETE'
        })
        
      }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item">
        <Link to='/'>ParkIt</Link>
      </a>

      <a className="navbar-item">
        Discover
      </a>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          More
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            About
          </a>
          <a className="navbar-item">
            Jobs
          </a>
          <a className="navbar-item">
            Contact
          </a>
          <hr className="navbar-divider" />
          <a className="navbar-item" onClick={logout}>
            Log out
          </a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary">
          <Link to='/signup'><strong>Sign up</strong></Link>
          </a>
          <a className="button is-light">
          <Link to='/login'><strong>Log in</strong></Link>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
  )
};

export default Navigation;