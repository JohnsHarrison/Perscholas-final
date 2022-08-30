import { useState, useEffect } from "react";
import { NavLink,useParams, } from "react-router-dom";
import axios from 'axios'
import apiUrl from "../apiConfig";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function ArtistPage(){
const [artist,setArtist] = useState(null)
const [album, setAlbum] = useState(null)
const {id} = useParams()


useEffect(() => {
    
    const fetchArtist = async (id) => {
   try {
       const response = await axios(`${apiUrl}/artists/${id}`)
       setArtist(response.data.artist)
    //    console.log(artist)
   } catch (error) {
       console.log(error)
   }
  }
  const fetchAlbums = async (id) =>{
    const response =  await axios(`${apiUrl}/albums/${id}/artist`)
    const albums = (response.data.album)
    const mappedAlbums = albums.map((album,index)=>{
        const album_id = album._id
        return(
        <div className="CommunityCard"key={index}>
        <NavLink to={`/community/album/${album_id}`}>
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
            </NavLink>
            </div>
        )
    })
    setAlbum(mappedAlbums)
  }
  fetchAlbums(id)
  fetchArtist(id)
}, [])


    return(
        <div>
            { artist === null ? null :<div style={{backgroundcolor:"lightblue"}}>
            <h1>{artist.name}</h1>
            <img className="PageImage" alt="" src={artist.image}></img>
            <h2>{artist.genre}</h2>
            <h2>ARTIST ID: {artist._id}</h2>
            <div className='ArtistPage'>
            {album}
            </div>
            </div>
            }
        </div>
    )
}

export default ArtistPage