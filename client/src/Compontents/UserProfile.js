import axios from "axios";
import apiUrl from "../apiConfig";
import logo from '../assets/logo_final.png'
import { useNavigate,NavLink} from 'react-router-dom';

function UserProfile(props){
    const navigate = useNavigate()
    
    const loggedInUser =JSON.parse(sessionStorage.getItem("user")) ;

    const destroyProfile = (id) => {
        if(loggedInUser.email === "example@email.com"){
            window.alert("The example profile can't be deleted!")
        }else{
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
      }

    const handleLogout = () => {
        sessionStorage.clear()
        window.location.reload()
      };

    function handleHome(){
        navigate('/')
    }


    return(
        <div className="ProfileContainer">
            
            <img onClick={handleHome} style={{"width":"50%", "cursor":"pointer"}}alt='' src={logo}></img>
        <p style={{"fontWeight":"bold"}}>Logged in as: {
            loggedInUser ?  <span style={{"textDecoration":"underline"}}>{loggedInUser.name}</span> : <span>Guest</span>
        }</p>
       
            
            <div className="ProfileInnerContainer">
                <div className="NavLinks">
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/community'}>Community</NavLink>
                    {
                        loggedInUser ? <NavLink to={'/contribute'}>Contribute</NavLink> : null
                    }
                    
                </div>
                
                    {
                        loggedInUser ?
                            <div> 
                                <button className="ProfileButton" onClick={handleLogout}>Log Out</button>
                                <button className="ProfileButton" onClick={destroyProfile}> DELETE PROFILE</button> 
                            </div>    
                            :
                            <div className="LoginBar">
                                <button className="ProfileButton"><NavLink to={'/login'}>Log In</NavLink></button>
                                <button className="ProfileButton"><NavLink to={'/register'}>Register</NavLink></button>
                            </div>                           
                    }    
            </div>
        </div>
    )
}

export default UserProfile