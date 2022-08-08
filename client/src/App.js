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
import ParkForm from './components/ParkForm';

function App() {
  const [parks, setParks] = useState([]);
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([]);
  const [cart, setCart] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('/authorized_user')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setIsAuthenticated(true);
          setUser(user);

          fetch('/parks')
          .then(res => res.json())
          .then(setParks);
        });
      }
    });
  },[]);

  function handlePost(obj){
    fetch('/parks',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(obj)
    })
    .then(res => res.json())
    .then(newPark => {
      if(newPark.errors){
        setErrors(newPark.errors)
      } else {
        setParks([...parks,newPark])
      }
    })
}

console.log(parks)
  return (
    <div className="App">
      <Navigation cart={cart} user={user} setUser={setUser} />
      <hr/>
      <Routes>

        <Route exact path='/' element={ <Home  user={user} setUser={setUser} setIsAuthenticated={setIsAuthenticated}/>} />
        <Route exact path='/parks' element={ <ParksPage parks={parks} user={user} />} />
        <Route exact path='/parks/:id' element={ <ParkDetail user={user} cart={cart} setCart={setCart}/>} />
        <Route exact path='/logout' element={ <Logout />} />
        <Route exact path='/signup' element={ <Signup setUser={setUser} navigate={navigate} />} />
        <Route exact path='/login' element={ <Login user={user} setUser={setUser} navigate={navigate} />} />
        <Route exact path='/' element={ <ParkForm handlePost={handlePost} errors={errors} />} />

      </Routes>
    </div>
  );
}

export default App;