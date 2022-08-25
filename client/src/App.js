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
import AddParkForm from './components/AddParkForm';
import EditParkForm from './components/EditParkForm';

function App() {
  const [parks, setParks] = useState([]);
  const [user, setUser] = useState();
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  
  useEffect(() => {
    // authenticating user on page load
    fetch('/authenticated_user')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setUser(user);

      // getting all parks
          fetch('/parks')
          .then(res => res.json())
          .then(setParks);
        });
      }
    });
  },[]);

// adding a park
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

// updating a park
  function handleUpdatePark(updatedPark) {
    const updatedParks = parks.map((park) => {
      if (park.id === updatedPark.id) {
        return updatedPark;
      } else {
        return park;
      }
    });
    setParks(updatedParks);
  }
  // }

//  deleting a park
  function handleDeletePark(id) {
    fetch(`/parks/${id}`, {
      method: 'DELETE',
      headers: {'Accept': 'application/json'}
    })
    .then(()=> {
      let updatedParks = parks.filter(park => park.id !== id)
      setParks(updatedParks)
    })
  }

console.log(user)

  return (
    <div className="App">
      <Navigation user={user} setUser={setUser}  navigate={navigate} />
      <hr/>
      <Routes>

        <Route exact path='/' element={ <Home  user={user} setUser={setUser} />} />
        <Route exact path='/parks' element={ <ParksPage parks={parks} user={user} onDeletePark={handleDeletePark} /> } />
        <Route exact path='/parks/:id' element={ <ParkDetail user={user} parks={parks}/>} />
        <Route exact path='/signup' element={ <Signup setUser={setUser} navigate={navigate} />} />
        <Route exact path='/logout' element={ <Logout />} />
        <Route exact path='/login' element={ <Login  navigate={navigate} setUser={setUser} />} />
        <Route exact path='/parks/new' element={ <AddParkForm handlePost={handlePost} errors={errors} navigate={navigate}/>} />
        <Route exact path='/parks/:id/edit' element={ <EditParkForm handlePost={handlePost}  onUpdatePark={handleUpdatePark} errors={errors} navigate={navigate}/>} />

      </Routes>
    </div>
  );
}

export default App;