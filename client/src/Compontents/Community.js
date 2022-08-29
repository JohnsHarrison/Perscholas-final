import * as React from 'react';
import { useState,useEffect } from 'react';
import { useNavigate,NavLink } from 'react-router-dom';
import apiUrl from "../apiConfig"
import axios from "axios"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function Community(){
const [artists,setArtists] = useState()
const [albums,setAlbums] = useState()
const [songs,setSongs] = useState()
const navigate = useNavigate() 





useEffect(()=>{
 
const destroyArtist = (id) => {
      axios({
         url: `${apiUrl}/artists/${id}`,
         method: 'DELETE'
       }) 
      //  console.log(artists)
      //  setArtists(artists.filter(artist => artist._id !== id))
       window.location.reload(false)
    }

const destroyAlbum = (id) => {
      axios({
         url: `${apiUrl}/albums/${id}`,
         method: 'DELETE'
       }) 
       window.location.reload(false)
    }

const destroySong = (id) => {
      axios({
         url: `${apiUrl}/songs/${id}`,
         method: 'DELETE'
       }) 
       window.location.reload(false)
    }

    const fetchArtist = async () => {
        try{
            const response = await axios(`${apiUrl}/artists`)
            const results = response.data.artists
            const mappedArtist = results.map((artist,index)=>{
              const id =(artist._id)
                return( 
                  <div>
                    <div className="CommunityCard"key={index}>
                      <Card sx={{ maxWidth: 345 }}>
                      <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            image={artist.image}
                            alt=""
                      />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {artist.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            {artist.genre}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </div>
                        <button onClick={() => destroyArtist(id)} >Delete Item</button>
                       <NavLink to={`/community/artist/${id}/edit`}><button>Edit</button></NavLink>
                        
                      
                    </div> 
                )
            })
            setArtists(mappedArtist)
    
        }catch(error){
            console.log(error)
        }
    }
    const fetchAlbums = async () => {
      try{
        const response = await axios(`${apiUrl}/albums`)
        const results = response.data.albums
        console.log(results)
        const mappedAlbums = results.map((album,index)=>{
          const id =(album._id)
          return(
            <div className="CommunityCard"key={index}>
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
            <button onClick={() => destroyAlbum(id)} >Delete Item</button>
            <NavLink to={`/community/album/${id}/edit`}><button>Edit</button></NavLink>
          </div>
          )

        })
        setAlbums(mappedAlbums)

        
      }catch(error){
        console.log(error)
    }
    }

    const fetchSongs = async () => {
      const list =[]
      try{
        const response = await axios(`${apiUrl}/songs`)
        const results = response.data.songs
        console.log(results.length)
        console.log(results)
        for(let i = 0; i < 20 ; i++){
          let random = Math.floor(Math.random() * results.length)
          list.push(results[random])
        }

      }catch(error){
        console.log(error)
    }
    console.log(list)
    const mappedSongs = list.map((song,index)=>{
      const id =(song._id)
      return(
        <div key={index}>
      <h1 className='Song'>{song.name}</h1>
      <button onClick={() => destroySong(id)} >Delete Item</button>
      <NavLink to={`/community/song/${id}/edit`}><button>Edit</button></NavLink>
      </div>
      )
    })
    setSongs(mappedSongs)
    }

 fetchArtist()
 fetchAlbums()
 fetchSongs()
 },[navigate])
 






    return(
    <div className='Community'>
        <h1>CHECK OUT WHAT THE COMMUNITY IS LISTENING TO NOW!</h1>
        <h3>ARTISTS</h3>

      <div className='CommunityCardContainer' >
        {artists}
      </div>

        <h3>ALBUMS</h3>

       <div className='CommunityCardContainer'>
          {albums}
       </div>

       {songs}

    </div>
    )
}

export default Community