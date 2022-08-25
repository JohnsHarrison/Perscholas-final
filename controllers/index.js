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

const createArtist = async (req,res) =>{
        try{
         const artist = await new Artist(req.body)
         await artist.save()
         return res.status(201).json({
            artist,
         })
        }catch(error){
         return res.status(500).json({error: error.message})
        }
    
}

const createSong = async (req,res) =>{
    try{
        const song = await new Song(req.body)
        await song.save()
        return res.status(201).json({
           song,
        })
       }catch(error){
        return res.status(500).json({error: error.message})
       }
}

const createAlbum = async (req,res) =>{
    try{
     const album = await new Album(req.body)
     await album.save()
     return res.status(201).json({
        album,
     })
    }catch(error){
     return res.status(500).json({error: error.message})
    }

}

const deleteArtist = async (req,res) =>{
    try{
        const {id} = req.params
        const deleted = await Artist.findByIdAndDelete(id)
        if(deleted){
            return res.status(200).send("Artist deleted")
        }
        throw new Error("Artist not found")
    }catch(error){
        return res.status(500).send(error.message)
    }
}

const deleteAlbum = async (req,res) =>{
    try{
        const {id} = req.params
        const deleted = await Album.findByIdAndDelete(id)
        if(deleted){
            return res.status(200).send("Album deleted")
        }
        throw new Error("Album not found")
    }catch(error){
        return res.status(500).send(error.message)
    }
}

const deleteSong = async (req,res) =>{
    try{
        const {id} = req.params
        const deleted = await Song.findByIdAndDelete(id)
        if(deleted){
            return res.status(200).send("Song deleted")
        }
        throw new Error("Song not found")
    }catch(error){
        return res.status(500).send(error.message)
    }
}










module.exports={
    getAllAlbums,
    getAllArtists,
    getAllSongs,
    getArtistByID,
    getAlbumByID,
    createArtist,
    deleteArtist,
    createAlbum,
    deleteAlbum,
    createSong,
    deleteSong

}