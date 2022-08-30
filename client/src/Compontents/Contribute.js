import AddAlbum from './AddAlbum';
import AddArtist from './AddArtist';
import AddSong from './AddSong';

function Contribute(){

    return(
    <div className='ContributeContainer'>
      <h1>Contribute to the community</h1>
      <p>Values marked with * required</p>
        <div className='Contribute'>
        <AddArtist></AddArtist>
        <AddAlbum></AddAlbum>
        <AddSong></AddSong>
        </div>
    </div>
    )
}

export default Contribute