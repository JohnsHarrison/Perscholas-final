import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from 'axios'
import apiUrl from "../apiConfig";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';





function EditAlbum(){
    const navigate = useNavigate()
    const { id } = useParams()  //get the id from the current object to update
    const [results,setResults] = useState(null)
    const [album, setAlbum] = useState({
        artist:"",
        
        name:"",
        image:"",
        tracks:"",
        released:"",
        runtime:""
    })
    const [updated, setUpdated] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
       try {
           const response = await axios(`${apiUrl}/artists/${id}`)
           setResults(response.data)
           setAlbum(response.data)
          
           console.log(results)
       } catch (error) {
           console.log(error)
       }
      }
      fetchData()
    }, [id])

    const handleChange = (event) => {
  
        const updatedField = { [event.target.name] : event.target.value }
     
        const editedAlbum = Object.assign(album, updatedField)
   
        setAlbum(editedAlbum)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
         axios({
             url: `${apiUrl}/albums/${id}`,
             method: 'PUT',
             data: album
         }).then(() => setUpdated(true)).catch(console.error)
    }

    useEffect(() => {
        if(updated) {
            return navigate(`/community`)
        }
    },[id])

    return(
        <div>
           {
            results ?  <div className="CommunityCard">
           <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={album.image}
                  alt=""
            />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  {album.artist}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                  {album.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Tracks:{album.tracks} Released:{album.released} Runtime:{album.runtime}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div> : null
           }

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

export default EditAlbum
