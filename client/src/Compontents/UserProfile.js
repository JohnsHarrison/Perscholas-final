import axios from "axios";
import apiUrl from "../apiConfig";
import logo from '../assets/logo_final.png'
import { useNavigate,NavLink} from 'react-router-dom';

function UserProfile(props){
    const navigate = useNavigate()

    const destroyProfile = (id) => {
        let answer = window.confirm("Are you sure you want to delete your profile?")
        if (answer){ 
            axios({
                url: `${apiUrl}/users/${props.currentUser._id}`,
                method: 'DELETE'
            }) 
                sessionStorage.clear()
                window.location.reload()
            }
      }

    const handleLogout = () => {
        sessionStorage.clear()
        window.location.reload()
      };
      console.log(props.currentUser)

    function handleHome(){
        navigate('/')
    }


    return(
        <div className="ProfileContainer">
            
            <img onClick={handleHome} style={{"width":"50%", "cursor":"pointer"}}alt='' src={logo}></img>
            <p style={{"fontWeight":"bold"}}>Logged in as: <span style={{"textDecoration":"underline"}}>{props.currentUser.name}</span></p>
            
            <div className="ProfileInnerContainer">
                <div className="NavLinks">
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/community'}>Community</NavLink>
                    <NavLink to={'/contribute'}>Contribute</NavLink>
                </div>
                <div>
                    <button className="ProfileButton" onClick={handleLogout}>Log Out</button>
                    <button className="ProfileButton" onClick={destroyProfile}> DELETE PROFILE</button>
                </div>  
            </div>
        </div>
    )
}

export default UserProfile