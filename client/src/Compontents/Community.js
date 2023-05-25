import * as React from 'react';
import { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import apiUrl from "../apiConfig"
import axios from "axios"
import Missing_album from '../assets/Missing_album.svg'
import Missing_artist from '../assets/Missing_artist.svg'
import Loader from "../assets/Load.gif"


function Community(){
const [artists,setArtists] = useState()
const [albums,setAlbums] = useState()
const [songs,setSongs] = useState()




useEffect(()=>{

const fetchArtist = async () => {
        try{
            const response = await axios(`${apiUrl}/artists`)
            const results = response.data.artists
            const mappedArtist = results.map((artist,index)=>{
              const id =(artist._id)
                return( 
                  
                    <div className="CommunityCard"key={index}>
                    <NavLink style={{"textDecoration":"none"}} to={`/community/artist/${id}`}>
                      <div className='ArtistCardContainer'> 
                        <h2>{artist.name}</h2>
                        {
                          artist.image === '' ? <img alt='artist' src={Missing_artist}></img>: <img alt='artist' src={artist.image}></img>
                        }
                        <p>{artist.genre}</p>
                      </div>
                      </NavLink>
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
        const mappedAlbums = results.map((album,index)=>{
          const id =(album._id)
          return(
            <div className="CommunityCard"key={index}>
            <NavLink  style={{"textDecoration":"none"}} to={`/community/album/${id}`}>
            
            <div className='AlbumCardContainer'> 
              {
                album.image === '' ? <img alt='album' src={Missing_album}></img>: <img alt='album' src={album.image}></img>
              }
              <h2>{album.artist}</h2>
              <h3>{album.name}</h3>
              <p><span>Released</span>:{album.released !== null ? album.released : "?"}</p>
            </div>
            </NavLink>
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
        for(let i = 0; i < 20 ; i++){
          let random = Math.floor(Math.random() * results.length)
          list.push(results[random])
        }

      }catch(error){
        console.log(error)
    }
    const mappedSongs = list.map((song, index)=>{
      const artist = song.artist_name ? song.artist_name : "?"
      const album = song.album_name ? song.album_name : "?"
      return(
      <div className='SongText'>
        <h1 key={index} >{song.name} <span style={{"fontSize":"1rem"}}>by</span> {artist} <span style={{"fontSize":"1rem"}}> from </span> {album}</h1>
      </div>
      )
    })
    setSongs(mappedSongs)
    }

 fetchArtist()
 fetchAlbums()
 fetchSongs()
 },[])
 






    return(
      <>
      {
        !artists || !albums || !songs ? <div className='LoadingScreen'>
          <img src={Loader}></img>
          <h1>L O A D I N G</h1>
        </div> : null
      }
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
       <h3>SONGS</h3>
       {songs}

    </div>
    </>
    )
}

export default Community