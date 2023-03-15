import { useState } from 'react';
import AddAlbum from './AddAlbum';
import AddArtist from './AddArtist';
import AddSong from './AddSong';

function Contribute(){
  const loggedInUser = sessionStorage.getItem("user");
  const [toEdit,setToEdit] = useState("artist")


    return(
      <div>
       
      {
        loggedInUser ?  <div className='ContributeContainer'>
                           <h1>Contribute to the community</h1>
                            <select onChange={((e)=>{setToEdit(e.target.value)})}>
                              <option value="artist">artist</option>
                              <option value="album">album</option>
                              <option value="song">song</option>
                            </select>
                           <p>Values marked with * required</p>
                            <div className='Contribute'>
                             {
                            toEdit === "artist" ? <AddArtist></AddArtist>
                            :toEdit ==="album" ? <AddAlbum></AddAlbum>
                            :toEdit === "song" ?  <AddSong></AddSong>
                            : null
                           } 
                           </div>
                        </div> : <h1>Please LOG IN to contribute!</h1>
      }
       </div>
    )
}

export default Contribute