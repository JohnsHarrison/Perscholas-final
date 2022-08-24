import {NavLink} from 'react-router-dom'


function NavBar(){
    return(
        <div>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/community'}>Community</NavLink>
        </div>
    )

}

export default NavBar