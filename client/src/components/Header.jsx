import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import {  useDispatch } from 'react-redux';
import { signOut } from '../actions';


// import { faHandsHolding,  } from '@fortawesome/free-solid-svg-icons'

function Header({ user, setUser }) {

  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();

  const [loggedIn, setLoggedIn] = useState(false);
  let history = useHistory();
  const handleLogout = e => {

    e.preventDefault();

    fetch(`/api/logout`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
     
    }).then(resp => {
      if (resp.ok) {
        resp.json().then(data => {
          setUser(null);
          dispatch(signOut());
          history.push("/")
        })
      }
    })
  }  

  useEffect(() => {
    if (user) {
      setLoggedIn(true)
    }
    else {
      setLoggedIn(false);
    }
  }, [user])
  

  return (<Navbar style={{ color: "white" }} expand="lg">

    
    <Container>
      <Link to = "/"> <Navbar.Brand style={{ color: "white" }} href="">Join The Band</Navbar.Brand></Link>
   
      {!isLoggedIn ?
        <>
          <Link to="/login"> <Navbar.Brand style={{ color: "white" }} href="login">Log In</Navbar.Brand></Link>
          <Link to="/signup"> <Navbar.Brand style={{ color: "white" }} href="signup">Sign Up</Navbar.Brand></Link>
        </> : <> 
          <Link to="/"> <Navbar.Brand onClick={handleLogout} style={{ color: "white" }} href="signup">Log out</Navbar.Brand></Link>
          {/* <Link to="/edit-profile"><Navbar.Brand style={{ color: "white" }}>Edit Profile</Navbar.Brand></Link> */}
          <Link to="/profiles"> <Navbar.Brand style={{ color: "white" }}>Profiles</Navbar.Brand></Link>
            </>
      }
   
       
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
  </Container>
</Navbar>)
}
export default Header;