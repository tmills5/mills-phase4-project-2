import React, { useState } from 'react';
// import {
//   MDBContainer,
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarToggler,
//   MDBNavbarNav,
//   MDBIcon,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBCollapse
// } from 'mdb-react-ui-kit';
import treesLogo from '../assets/treesLogo.png';
// import { Link } from 'react-router-dom';


function Navigation( { user, setUser } ) {
  // const [showNav, setShowNav] = useState(false);
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
    <nav>
      <ul>
        <li>
          <a href='/'>
            <img src={treesLogo} alt='logo' height="100px" />
          </a>
        </li>
        <li><a href='/parks'>Explore</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href='/logout' onClick={logout}>Logout</a></li>
      </ul>
  </nav>
    // <MDBNavbar expand='lg' light bgColor='light'>
    // <MDBContainer fluid>
    //   <MDBNavbarBrand href='/'>
        // {/* add trees logo here */}
        // {/* <img src={trees} alt="logo"/> */}
        // {/* <h4 className="nav-title">ParkIt</h4> */}
      // </MDBNavbarBrand>
      // <MDBNavbarToggler
      //   type='button'
      //   aria-expanded='false'
      //   aria-label='Toggle navigation'
      //   onClick={() => setShowNav(!showNav)}
      // >
      //   <MDBIcon icon='bars' fas />
      // </MDBNavbarToggler>
      // <MDBCollapse navbar show={showNav}>
      //   <MDBNavbarNav>

      //     <MDBNavbarItem>
      //       <MDBNavbarLink href='/parks'>Parks</MDBNavbarLink>
      //     </MDBNavbarItem>
          // {/* <MDBNavbarItem>
          //   <MDBNavbarLink href='/logout'>Log out</MDBNavbarLink>
          // </MDBNavbarItem> */}
          // <MDBNavbarItem>
          //   <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
          //     Logout
          //   </MDBNavbarLink>
          // </MDBNavbarItem>
          // {/* <MDBTypography className="text-center"> */}

          // {/* </MDBTypography> */}
  //         <MDBIcon icon="user ms-auto"/>
  //         <p>Welcome.. {user ? user.name : ''}</p>
  //       </MDBNavbarNav>
  //     </MDBCollapse>
  //   </MDBContainer>
  // </MDBNavbar>
    // <nav className="navbar" role="navigation" aria-label="main navigation">
    //   <div className="navbar-brand">
    //     <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href='/'>
    //       <span aria-hidden="true"></span>
    //       <span aria-hidden="true"></span>
    //       <span aria-hidden="true"></span>
    //     </a>
    //   </div>

    //   <div id="navbarBasicExample" className="navbar-menu">
    //     <div className="navbar-start">

    //       <div className="navbar-item">
    //         <Link to='/'>Home</Link>
    //       </div>

    //       <div className="navbar-item" href='/'>
    //         <Link to='/parks'>Parks</Link>
    //       </div>


    //       <div className="navbar-item" onClick={logout}>
    //         <Link to='/logout'>Log Out</Link>
    //       </div>

    //   </div>
    //   <div className="nav-title">
    //     ParkIt
        
    //   </div>
    //   <p>Welcome..{user ? user.name : ''}</p>
    //   <div className="navbar-end">
    //     <div className="navbar-item">
    //       <div className="buttons">
    //           </div>
    //           <div className="button is-rounded" href='/'>
    //             <Link to='/signup'><strong>Sign up</strong></Link>
    //           </div>
    //           <div className="button is-rounded is-success">
    //             <Link to='/login'><strong>Log in</strong></Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  )
};

export default Navigation;