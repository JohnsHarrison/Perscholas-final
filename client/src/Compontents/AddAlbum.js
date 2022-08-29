import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import apiUrl from "../apiConfig"
import axios from 'axios';


function AddAlbum(){
const navigate = useNavigate();
const [album, setAlbum] = useState({
  artist:"",
 
  name:"",
  image:"",
  tracks:"",
  released:"",
  runtime:""

})

const [createdAlbum, setCreatedAlbum] = useState(null)

    const handleChange = (event) => {
      console.log(album)
        //created a placeholder grabbing the value from the user input form
        const updatedField = { [event.target.name] : event.target.value }
        //assigned the empty state with the updatedField into one object
        const editedAlbum = Object.assign(album, updatedField)
        //assigned the new object to be updated to the state
        setAlbum(editedAlbum)
        console.log(album)
      }
      
      const handleSubmit = (event) => {
        event.preventDefault()
    
       
        axios({
          url: `${apiUrl}/albums`,
          method: 'POST',
          data: album
        }).then(res => setCreatedAlbum(res.data.name)).catch(console.error)
    
      }
    
     

 useEffect(() => {
        if (createdAlbum) {
          return navigate(`/community`)
        }
      }, [createdAlbum, navigate])


    return(
      <div>
        <h2>ADD AN ALBUM</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
        <label>Artist Name *</label>
        <input
        placeholder="Artist Name"
        defaultValue={album.artist}
        name="artist"
        onChange={(e) => handleChange(e)} />

        <label>Artist ID</label>
        <input
        placeholder="123e456b789f3219876ff"
        defaultValue={album.artist_id}
        name="artist_id"
        onChange={(e) => handleChange(e)} />

        <label>Album Name *</label>
        <input
        placeholder="Album Name"
        defaultValue={album.name}
        name="name"
        onChange={(e) => handleChange(e)} />

        <label>Image</label>
        <input
        placeholder="https://image.jpg"
        defaultValue={album.image}
        name="image"
        onChange={(e) => handleChange(e)} />

        <label>Tracks</label>
        <input
        placeholder="number of tracks"
        defaultValue={album.tracks}
        name="tracks"
        onChange={(e) => handleChange(e)} />

        <label>Release Year</label>
        <input
        placeholder="2022"
        defaultValue={album.released}
        name="released"
        onChange={(e) => handleChange(e)} />

        <label>Runtime </label>
        <input
        placeholder="100 minutes"
        defaultValue={album.runtime}
        name="runtime"
        onChange={(e) => handleChange(e)} />

        <button type="submit">Submit</button>
        

        <Link to={"/community"}>
            <button>Cancel</button>
        </Link>

    </form>
    </div>
    )
}

export default AddAlbum