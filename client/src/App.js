import './App.css';
import { Routes,Route,useNavigate, NavLink } from 'react-router-dom';
import Home from './Compontents/Home';
import Community from './Compontents/Community';
import Contribute from './Compontents/Contribute';
import EditArtist from './Compontents/EditArtist';
import EditAlbum from './Compontents/EditAlbum';
import EditSong from './Compontents/EditSong';
import ArtistPage from './Pages/ArtistPage';
import AlbumPage from './Pages/AlbumPage';
import Login from './Pages/Login';
import { useState } from 'react';
import Register from './Pages/Regsiter';
import UserProfile from './Compontents/UserProfile';

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const loggedInUser = sessionStorage.getItem("user");

  return (
    <div className="App">
     
      <UserProfile  currentUser={currentUser} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/contribute' element={<Contribute/>}/>
        <Route path='/community/artist/:id' element={<ArtistPage/>}/>
        <Route path='/community/album/:id' element={<AlbumPage/>}/>
        <Route path='/community/artist/:id/edit' element={<EditArtist/>}/>
        <Route path='/community/album/:id/edit' element={<EditAlbum/>}/>
        <Route path='/community/song/:id/edit' element={<EditSong/>}/>
        <Route path='/login' element={<Login setCurrentUser= {setCurrentUser}  currentUser={currentUser}/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      {
        !loggedInUser ? <div className='LoginBar'>
            <NavLink to={'/login'}>Log In</NavLink>
            <NavLink to={'/register'}>Register</NavLink>
      </div> : null
      }
      
    </div>
  );
}

export default App;
