import { useState, useEffect } from "react";
import { NavLink,useParams,useNavigate } from "react-router-dom";
import axios from 'axios'
import apiUrl from "../apiConfig";
import Missing_artist from '../assets/Missing_artist.svg'
import Missing_album from '../assets/Missing_album.svg'



function ArtistPage(){
const [artist,setArtist] = useState(null)
const [album, setAlbum] = useState(null)
const {id} = useParams()
const navigate = useNavigate()
const loggedInUser =sessionStorage.getItem("user");


useEffect(() => {
    
console.log(artist)

    const fetchArtist = async (id) => {
   try {
       const response = await axios(`${apiUrl}/artists/${id}`)
       setArtist(response.data.artist)
       console.log(response)
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
        <div className='AlbumCardContainer2'> 
              {
                album.image === '' ? <img alt="" src={Missing_album}></img>: <img alt="" src={album.image}></img>
              }
              <h1>{album.name}</h1>
              <p><span>Tracks</span>:{album.tracks} <span>Released</span>:{album.released} <span>Runtime</span>:{album.runtime}</p>
            </div>
            </NavLink>
            </div>
        )
    })
    setAlbum(mappedAlbums)
  }
  fetchAlbums(id)
  fetchArtist(id)
}, [id])

const destroyArtist = (id) => {
  axios({
     url: `${apiUrl}/artists/${id}`,
     method: 'DELETE'
   })
   alert("Artist deleted!")
   navigate('/community')
}


    return(
        <div>
            { artist === null ? null :<div className="ArtistContainer">
            <h1 style={{"fontSize":"3rem"}}>{artist.name}</h1>
            {
              artist.image === '' ? <img className="PageImage" alt='' src={Missing_artist}></img> : <img className="PageImage" alt="" src={artist.image}></img>
            }
            <h2>{artist.genre}</h2>
            <h2>ARTIST ID: {artist._id}</h2>
            {
              loggedInUser ?
              <div>  <button onClick={() => destroyArtist(id)} >Delete Item</button>
              <NavLink to={`/community/artist/${id}/edit`}><button>Edit</button></NavLink>
              </div> : null
            }
            <div className='ArtistPage'>
              <h1>Albums</h1>
              <div className="AlbumsContainer">
                {album}
              </div>
            </div>
            </div>
            }
        </div>
    )
}

export default ArtistPage