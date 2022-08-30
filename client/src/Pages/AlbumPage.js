import { useState, useEffect } from "react";
import { useParams, } from "react-router-dom";
import axios from 'axios'
import apiUrl from "../apiConfig";


function AlbumPage(){
const [album,setAlbum] = useState(null)
const [song, setSong] = useState(null)
const {id} = useParams()


useEffect(() => {
    
    const fetchAlbum = async (id) => {
   try {
       const response = await axios(`${apiUrl}/albums/${id}`)
       setAlbum(response.data.album)
   } catch (error) {
       console.log(error)
   }
  }
  const fetchSongs = async (id) =>{
    const response =  await axios(`${apiUrl}/songs/${id}/album`)
    const songs = (response.data.song)
    console.log(songs)
    const mappedSongs = songs.map((song,index)=>{
        return(<div key={index}>
            <h2>{song.track_number}: {song.name} {song.length}</h2>
                </div>
            )
            
       
    })
    setSong(mappedSongs)
  }
  fetchAlbum(id)
  fetchSongs(id)
}, [])


    return(
        <div>
            { album === null ? null :<div  className='AlbumPage'  >
            <h1>{album.name}</h1>
            <img className="PageImage" alt="" src={album.image}></img>
            <h2>ALBUM ID: {album._id}</h2>
            <div className="Song-P">
            <p>Tracks:{album.tracks}</p>
            <p>Released:{album.released}</p>
            <p>Runtime:{album.runtime}</p>
            </div>

            {song} 

            {/* <div className="Song-P">
            <p>Tracks:{album.tracks}</p>
            <p>Released:{album.released}</p>
            <p>Runtime:{album.runtime}</p>
            </div> */}
           
            {/* <div className='AlbumPage'>
             {song} 
            </div> */}
            </div>
            }
        </div>
    )
}

export default AlbumPage