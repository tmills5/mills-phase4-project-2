import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Home from './components/Home';
import Navigation from './components/Navigation';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import ParksPage from './components/ParksPage';
import ParkDetail from './components/ParkDetail';

function App() {
  const [parks, setParks] = useState([])
  const [user, setUser] = useState(null);
  //  const [errors, setErrors] = useState(false)
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    
    fetch('/parks')
      .then(response => response.json())
      .then(parksInitial => {
        console.log(parksInitial)
        setParks(parksInitial)
      })
      .catch(err => console.error(err));

      // auto logging in the user and directing them to login if not
    fetch('/auth')
      .then(res => {
        if(res.ok){
          res.json()
          .then(user => setUser(user))
        }
      })
  },[]);


  return (
    <div className="App">
      <Navigation user={user} setUser={setUser} />
      <hr/>
      <Routes>

        <Route exact path='/' element={ <Home  user={user} />} />
        <Route exact path='/parks' element={ <ParksPage parks={parks} setParks={setParks} />} />
        <Route exact path='/parks/:id' element={ <ParkDetail />} />
        <Route exact path='/logout' element={ <Logout />} />
        <Route exact path='/signup' element={ <Signup setUser={setUser} navigate={navigate} />} />
        <Route exact path='/login' element={ <Login user={user} setUser={setUser} navigate={navigate} />} />
        
        
      </Routes>
    </div>
  );
}

export default App;