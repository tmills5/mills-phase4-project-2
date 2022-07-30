import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Navigation from './components/Navigation';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  const [parks, setParks] = useState([])
  // const [errors, setErrors] = useState(false)

  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-Api-Key': ' ',
  //       'X-RapidAPI-Key': '9a9f03145bmsh082d0e7cede4082p1cd3a7jsn6c2d29c82494',
  //       'X-RapidAPI-Host': 'jonahtaylor-national-park-service-v1.p.rapidapi.com'
  //     }
  //   };
    
  //   fetch('https://jonahtaylor-national-park-service-v1.p.rapidapi.com/parks?stateCode=ga', options)
  //     .then(response => response.json())
  //     .then(parksInitial => {
  //       console.log(parksInitial)
  //       setParks(parksInitial)
  //     })
  //     .catch(err => console.error(err));
      
  // },[]);

  return (
    <div className="App">
      <Navigation />
      <Routes>

        <Route exact path='/' element={<Home parks={parks} /> } />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/login' element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;