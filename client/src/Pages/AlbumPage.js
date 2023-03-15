import { useState, useEffect } from "react";
import { useParams,NavLink,useNavigate } from "react-router-dom";
import axios from 'axios'
import apiUrl from "../apiConfig";



function AlbumPage(){
const [album,setAlbum] = useState(null)
const [song, setSong] = useState(null)
const[editingSong, setEdittingSong] = useState(false)
const {id} = useParams()
const navigate = useNavigate()
const loggedInUser = sessionStorage.getItem("user");


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
    const mappedSongs = songs.map((song,index)=>{
        let songID = song._id
        return(
                
                <div className="SongInfo" key={index}>
                    <h2>{song.track_number}: {song.name}</h2>
                    <div className="SongWhitespace"></div>
                    <h2>{song.length}</h2>
                    {
                        editingSong ?
                        <>
                            <button onClick={() => destroySong(songID)} >Delete Item</button>
                            <NavLink to={`/community/song/${songID}/edit`}><button>Edit</button></NavLink>
                        </> : null
                    }
                </div>
            )
            
       
    })
    setSong(mappedSongs)
  }
  fetchAlbum(id)
  fetchSongs(id)
}, [id,editingSong])


const destroyAlbum = (id) => {
    let answer = window.confirm("Are you sure you want to delete this album?")
    if(answer){
        axios({
       url: `${apiUrl}/albums/${id}`,
       method: 'DELETE'
     }) 
     alert("Album deleted!")
     navigate('/community')
    }
  }

  const destroySong = (id) => {
    let answer = window.confirm("Are you sure you want to delete this song?")
    if(answer){
       axios({
       url: `${apiUrl}/songs/${id}`,
       method: 'DELETE'
     }) 
     alert("Song deleted!")
     window.location.reload() 
    }
  }


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
            {
              loggedInUser ?
              <div>  <button onClick={() => destroyAlbum(id)} >Delete Item</button>
              <NavLink to={`/community/album/${id}/edit`}><button>Edit</button></NavLink>
              </div> : null
            }
            {song}
            {
                loggedInUser ? 
                <>
                    <button style={{"width":"130px", "alignSelf":"center", "margin":"10px 0px"}} onClick={(()=>setEdittingSong(!editingSong))}>Edit Songs</button>
                </> : null
            } 
            

            </div>
            }
        </div>
    )
}

export default AlbumPage