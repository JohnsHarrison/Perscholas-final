import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import apiUrl from '../apiConfig';
import axios from 'axios';




function Register(){
    const navigate = useNavigate();
    const [user, setUser] = useState({
    name:"",
    email:"",
    password:"",
})

    const [createdUser, setCreatedUser] = useState(null)

    const handleChange = (event) => {
        //created a placeholder grabbing the value from the user input form
        const updatedField = { [event.target.name] : event.target.value }
        //assigned the empty state with the updatedField into one object
        const editedUser = Object.assign(user, updatedField)
        //assigned the new object to be updated to the state
        setUser(editedUser)
      }

    const handleSubmit = (event) => {
        event.preventDefault()
    
       
        axios({
          url: `${apiUrl}/register`,
          method: 'POST',
          data: user
        }).then(res => setCreatedUser(res.data)).catch(error =>alert(error.response.data))
      }


      useEffect(() => {
        if (createdUser === "error") {
        alert("Please try again")
        }else if (createdUser){
        console.log(createdUser)
           navigate(`/login`)
        }
      }, [createdUser, navigate])


    return(
    <div className='FormContainer'> 
      <h1 style={{"alignSelf":"center"}}>Sign Up</h1>
        
      <form onSubmit={(e) => handleSubmit(e)}>
        <ul> 
          <li>
            <label>User Name</label>
            <input
            placeholder="User Name"
            defaultValue={user.name}
            name="name"
            onChange={(e) => handleChange(e)} required/>
          </li>
          <li>
            <label>Email</label>
            <input
            placeholder="example@gmail.com"
            defaultValue={user.email}
            type="email"
            name="email"
            onChange={(e) => handleChange(e)} required/>
          </li>
          <li>
            <label>password</label>
            <input
            placeholder="Password"
            defaultValue={user.password}
            type="password"
            name="password"
            onChange={(e) => handleChange(e)} required/>
          </li>
        </ul>

      <div style={{"display":"flex", "justifycontent": "center","margin": "10px", "flexDirection": "column","alignItems":"center"}}>
        <button className='SubmitButton' type="submit">Submit</button>

        <Link to={"/login"}>
            <button>Login</button>
        </Link>
      </div>
    </form>
    </div>

       
    )
}

export default Register