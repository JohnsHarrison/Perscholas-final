import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Compontents/Home';
import Community from './Compontents/Community';
import NavBar from './Compontents/NavBar';
import Contribute from './Compontents/Contribute';
import EditArtist from './Compontents/EditArtist';
import EditAlbum from './Compontents/EditAlbum';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/contribute' element={<Contribute/>}/>
        <Route path='/community/artist/:id/edit' element={<EditArtist/>}/>
        <Route path='/community/album/:id/edit' element={<EditAlbum/>}/>
      </Routes>
    </div>
  );
}

export default App;
