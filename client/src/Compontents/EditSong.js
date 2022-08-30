import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import apiUrl from "../apiConfig"
import axios from 'axios';



function EditSong(){
    const { id } = useParams()  //get the id from the current object to update
    const [results,setResults] = useState(null)
    const [song, setSong] = useState({
        name:"",
        track_number:0,
        length:"",
        explict:1,
    })

    useEffect(() => {
        const fetchData = async () => {
       try {
           const response = await axios(`${apiUrl}/songs/${id}`)
           setSong(response.data)
       } catch (error) {
           console.log(error)
       }
      }
      fetchData()
    }, [id])

    const handleChange = (event) => {
  
        const updatedField = { [event.target.name] : event.target.value }
     
        const editedSong = Object.assign(song, updatedField)
   
        setSong(editedSong)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
         axios({
             url: `${apiUrl}/songs/${id}`,
             method: 'PUT',
             data: song
         }).catch(console.error)
         setResults(song)
    }

  

    return(
     

        <div style={{width:"50%"}} className='EditPage' >
            {
                results === null ? null : 
                <div>
                    <h2>Song is now </h2>
                    <h3>Name: {song.name}</h3>
                    <h3>Album Id{song.album_id}</h3>
                    <h3>Track Number: {song.track_number}</h3>
                    <h3>Song Length: {song.length}</h3>
                    <h3>Explict: {song.explict}</h3>
                </div>
            }
            {
                results === null ?
           
             <form className='EditForm' onSubmit={(e) => handleSubmit(e)}>
        <label>Song Name *</label>
        <input
        placeholder="Song Name"
        defaultValue={song.name}
        name="name"
        onChange={(e) => handleChange(e)} />

        <label>Album ID</label>
        <input
        placeholder="123e456b789f3219876ff.jpg"
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
    : <Link to={"/community"}>
    <button>Go Back</button>
        </Link>
}

        </div>
    )
}

export default EditSong