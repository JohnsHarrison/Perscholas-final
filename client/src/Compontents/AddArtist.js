import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import apiUrl from "../apiConfig"
import axios from 'axios';


function AddArtist(){
const navigate = useNavigate();
const [artist, setArtist] = useState({
    name:'',
    image:'',
    genre:''
})

const [createdArtist, setCreatedArtist] = useState(null)

    const handleChange = (event) => {
        //created a placeholder grabbing the value from the user input form
        const updatedField = { [event.target.name] : event.target.value }
        //assigned the empty state with the updatedField into one object
        const editedArtist = Object.assign(artist, updatedField)
        //assigned the new object to be updated to the state
        setArtist(editedArtist)

      }
      
      const handleSubmit = (event) => {
        event.preventDefault()
    
       
        axios({
          url: `${apiUrl}/artists`,
          method: 'POST',
          data: artist
        }).then(res => setCreatedArtist(res.data.name)).catch(console.error)
    
      }
    
     

 useEffect(() => {
        if (createdArtist) {
          return navigate(`/community`)
        }
      }, [createdArtist, navigate])


    return(
      <div>
        <h2>ADD AN ARTIST</h2>

        <form onSubmit={(e) => handleSubmit(e)}>
        <label>Artist Name *</label>
        <input
        placeholder="Artist"
        defaultValue={artist.name}
        name="name"
        onChange={(e) => handleChange(e)} />

        <label>Image</label>
        <input
        placeholder="https://image.jpg"
        defaultValue={artist.image}
        name="image"
        onChange={(e) => handleChange(e)} />

        <label>Genre</label>
        <input
        placeholder="Genre"
        defaultValue={artist.genre}
        name="genre"
        onChange={(e) => handleChange(e)} />

        <button type="submit">Submit</button>

        <Link to={"/community"}>
            <button>Cancel</button>
        </Link>

    </form>
    </div>
    
    )
}

export default AddArtist