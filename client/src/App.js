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
import UserProfile from './Compontents/UserProfile';

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const navigate = useNavigate();



  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("user");
    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser));
      navigate('/')
    }else{
      navigate('/login')
    }
  }, []);

  return (
    <div className="App">
      {
        !currentUser ? 
        <>
          <Routes>
            <Route path='login' element={<Login setCurrentUser= {setCurrentUser}  currentUser={currentUser}/>}/>
            <Route path = 'register' element={<Register />}/>
           
          </Routes>
        </>: 
        <>
      {/* <NavBar/> */}
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
        
      </Routes>
      </>
      }
    </div>
  );
}

export default App;
