import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Compontents/Home';
import Community from './Compontents/Community';
import NavBar from './Compontents/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/community' element={<Community/>}/>
      </Routes>
    </div>
  );
}

export default App;
