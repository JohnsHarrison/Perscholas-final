import './App.css';
import { Routes,Route,useNavigate } from 'react-router-dom';
import Home from './Compontents/Home';
import Community from './Compontents/Community';
import NavBar from './Compontents/NavBar';
import Contribute from './Compontents/Contribute';
import EditArtist from './Compontents/EditArtist';
import EditAlbum from './Compontents/EditAlbum';
import EditSong from './Compontents/EditSong';
import ArtistPage from './Pages/ArtistPage';
import AlbumPage from './Pages/AlbumPage';
import Login from './Pages/Login';
import { useState,useEffect } from 'react';
import Register from './Pages/Regsiter';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear()
    window.location.reload()
  };


  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("user");
    if (loggedInUser) {
      setCurrentUser(loggedInUser);
      navigate('/')
    }else{
      navigate('/login')
    }
  }, []);

  return (
    <div className="App">
      
      {currentUser}
      {
        !currentUser ? 
        <>
          <Routes>
            <Route path='login' element={<Login setUserLoggedIn = {setUserLoggedIn} setCurrentUser= {setCurrentUser}  currentUser={currentUser}/>}/>
            <Route path = 'register' element={<Register />}/>
           
          </Routes>
          <button >Register</button>
        </>: 
        <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/contribute' element={<Contribute/>}/>
        <Route path='/community/artist/:id' element={<ArtistPage/>}/>
        <Route path='/community/album/:id' element={<AlbumPage/>}/>
        <Route path='/community/artist/:id/edit' element={<EditArtist/>}/>
        <Route path='/community/album/:id/edit' element={<EditAlbum/>}/>
        <Route path='/community/song/:id/edit' element={<EditSong/>}/>
        
      </Routes>
      </>
      }
      <button onClick={handleLogout}> Log out</button>
    </div>
  );
}

export default App;
