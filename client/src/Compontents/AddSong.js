import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import apiUrl from "../apiConfig"
import axios from 'axios';


function AddSong(){
const navigate = useNavigate();
const [song, setSong] = useState({
    name:"",
    artist_name:"",
    album_name:"",
    track_number:0,
    length:"",
    explict:1,
})

const [createdSong, setCreatedSong] = useState(null)

    const handleChange = (event) => {
        //created a placeholder grabbing the value from the user input form
        const updatedField = { [event.target.name] : event.target.value }
        //assigned the empty state with the updatedField into one object
        const editedSong = Object.assign(song, updatedField)
        //assigned the new object to be updated to the state
        setSong(editedSong)
      }
      
      const handleSubmit = (event) => {
        event.preventDefault()
    
       
        axios({
          url: `${apiUrl}/songs`,
          method: 'POST',
          data: song
        }).then(res => setCreatedSong(res.data.name)).catch(console.error)
    
      }
    
     

 useEffect(() => {
        if (createdSong) {
          return navigate(`/community`)
        }
      }, [createdSong, navigate])


    return(

      <div>
        <h2>ADD A SONG</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
        <label>Song Name *</label>
        <input
        placeholder="Song Name"
        defaultValue={song.name}
        name="name"
        onChange={(e) => handleChange(e)} required />
        
        <label>Artist Name</label>
        <input
        placeholder="Artist Name"
        defaultValue={song.artist_name}
        name="artist_name"
        onChange={(e) => handleChange(e)} />

        <label>Album Name</label>
        <input
        placeholder="Album Name"
        defaultValue={song.album_name}
        name="album_name"
        onChange={(e) => handleChange(e)} />

        <label>Album ID</label>
        <input
        placeholder="123e456b789f3219876ff"
        defaultValue={song.album_id}
        name="album_id"
        onChange={(e) => handleChange(e)} />

        <label>Track Number</label>
        <input
        placeholder="Track Number"
        defaultValue={song.track_number}
        name="track_number"
        onChange={(e) => handleChange(e)} />

        <label>Length</label>
        <input
        placeholder="100 minutes"
        defaultValue={song.length}
        name="length"
        onChange={(e) => handleChange(e)} />
        <label>Explict</label>
        <select className='select' name="explict" onChange={(e) => handleChange(e)}>
          <option value={false}>False</option>    
          <option value={true} >True</option>
         </select>

        <button type="submit">Submit</button>

        <Link to={"/community"}>
            <button>Cancel</button>
        </Link>

    </form>
    </div>
    )
}

export default AddSong