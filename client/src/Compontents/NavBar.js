import {NavLink} from 'react-router-dom'
import logo from '../assets/logo_final.png'


function NavBar(){
    return(
         <div>
            <a href='https://github.com/JohnsHarrison/Perscholas-final'>
            <img className='NavImg' src={logo} alt=''></img>
            </a>
        <div className='NavBar'>
           
            
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/community'}>Community</NavLink>
            <NavLink to={'/contribute'}>Contribute</NavLink>
            </div>
        </div>
    )

}

export default NavBar