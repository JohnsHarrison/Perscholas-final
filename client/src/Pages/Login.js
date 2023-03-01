import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import apiUrl from '../apiConfig';
import axios from 'axios';



function Login(props){
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email:"",
        password:"",
    })

    const [loggedIn,SetLoggedIn] = useState(props.currentUser)

    const handleChange = (event) => {
        const updatedField = { [event.target.name] : event.target.value }
        const editedUser = Object.assign(user, updatedField)
        setUser(editedUser)
      }

async function handleSubmit(event){
        event.preventDefault()
        const response = await axios({
          url: `${apiUrl}/login`,
          method: 'POST',
          data: user
        }).catch(error =>alert(error.response.data))
        // .then(res => props.setCurrentUser(res.data.user.name)).catch(console.error)
      if(response.data){
        props.setCurrentUser(response.data.user.name)
        sessionStorage.setItem('user',response.data.user.name)
        navigate('/')
        // props.setUserLoggedIn(true)
      }
      }

    return(
        <div className='FormContainer'> 
            <h1 style={{"alignSelf":"center"}}>Login</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
            <ul>
              <li>
                <label>Email</label>
                <input
                placeholder="example@gmail.com"
                defaultValue={user.email}
                type="email"
                name="email"
                onChange={(e) => handleChange(e)} />
              </li>
              <li>
                <label>password</label>
                <input
                placeholder="Password"
                defaultValue={user.password}
                type="password"
                name="password"
                onChange={(e) => handleChange(e)} />
              </li>
            </ul>
            <div  style={{"display":"flex", "justifycontent": "center","margin": "10px", "flexDirection": "column","alignItems":"center"}}>
              <button className='SubmitButton' type="submit">Submit</button>

              <Link to={"/register"}>
              <button>Register</button>
              </Link>
            </div>
            </form>
        </div>
    )
}

export default Login