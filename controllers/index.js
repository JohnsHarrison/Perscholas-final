const Album = require('../models/album')
const Artist = require('../models/artist')
const Song = require('../models/song')

const getAllAlbums = async (req,res) =>{
    try{
        const albums = await Album.find()
        return res.status(200).json({albums})
       }catch(error){
           return res.status(500).send(error.message)
       }
}

const getAllArtists = async (req,res) =>{
    try{
        const artists = await Artist.find()
        return res.status(200).json({artists})

    }catch(error){
        return res.status(500).send(error.message)
    }
}

const getAllSongs = async (req,res) =>{
    try{
        const songs = await Song.find()
        return res.status(200).json({songs})

    }catch(error){
        return res.status(500).send(error.message)
    }
}

const getArtistByID = async (req,res) =>{
    try{
     const {id} = req.params
     const artist = await Artist.findOne({_id:id})
     if(artist){
        return res.status(200).json({artist})
       }
       return res.status(404).send('Artist not found')

    }catch(error){
        return res.status(500).send(error.message)
    }
}

const getAlbumByID = async (req,res) =>{
    try{
        const {id} = req.params
        const album = await Album.findOne({_id:id})
        if(album){
            return res.status(200).json({album})
           }
           return res.status(404).send('Album not found')
    

    }catch(error){
        return res.status(500).send(error.message)
    }
}







module.exports={
    getAllAlbums,
    getAllArtists,
    getAllSongs,
    getArtistByID,
    getAlbumByID

}