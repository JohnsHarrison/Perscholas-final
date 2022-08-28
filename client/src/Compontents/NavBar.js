import {NavLink} from 'react-router-dom'


function NavBar(){
    return(
        <div>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/community'}>Community</NavLink>
            <NavLink to={'/contribute'}>Contribute</NavLink>
        </div>
    )

}

export default NavBar