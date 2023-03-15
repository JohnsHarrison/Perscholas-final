import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios'
import apiUrl from "../apiConfig";
import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';





function EditArtist(){
    const navigate = useNavigate()
    const { id } = useParams()  //get the id from the current object to update
    // const [results,setResults] = useState(null)
    const [artist, setArtist] = useState({
        name:'',
        image:'',
        genre:''
    })

    useEffect(() => {
        const fetchData = async () => {
       try {
           const response = await axios(`${apiUrl}/artists/${id}`)
           setArtist(response.data)
       } catch (error) {
           console.log(error)
       }
      }
      fetchData()
    }, [id])

    const handleChange = (event) => {
  
        const updatedField = { [event.target.name] : event.target.value }
     
        const editedArtist = Object.assign(artist, updatedField)
   
        setArtist(editedArtist)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
         axios({
             url: `${apiUrl}/artists/${id}`,
             method: 'PUT',
             data: artist
         }).catch(console.error)
        //  setResults(artist)
        navigate(`/community/artist/${id}`)
    }


    return(
        <div className='EditPage'>
             <form onSubmit={(e) => handleSubmit(e)}>
        <label>Artist</label>
        <input
        placeholder="Artist to input"
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
        placeholder="Genre to input"
        defaultValue={artist.genre}
        name="genre"
        onChange={(e) => handleChange(e)} />

        <button type="submit">Submit</button>

        <Link to={`/community/artist/${id}`}>
            <button>Cancel</button>
        </Link>

    </form>
    </div>
    )
}

export default EditArtist
