import * as React from 'react';
import { useState,useEffect } from 'react';
import apiUrl from "../apiConfig"
import axios from "axios"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function Community(){
const [artists,setArtists] = useState()

useEffect(()=>{
    const fetchData = async () => {
        try{
            const response = await axios(`${apiUrl}/artists`)
            console.log(response)
            const results = response.data.artists
            const mappedArtist = results.map((artist,index)=>{
                return( 
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
                )
            })
            setArtists(mappedArtist)
    
        }catch(error){
            console.log(error)
        }
      }

 fetchData()
 },[])
 






    return(
    <div className='CommunityCardContainer'>
        <h4>CHECK OUT WHAT THE COMMUNITY IS LISTENING TO NOW!</h4>

        {artists}
    
    </div>
    )
}

export default Community