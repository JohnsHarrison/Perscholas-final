const {Router} = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req,res) => res.send('This is the root'))
//artists
router.get('/artists', controllers.getAllArtists)
router.get('/artists/:id', controllers.getArtistByID)
router.post('/artists', controllers.createArtist)
router.delete('/artists/:id', controllers.deleteArtist)
router.put('/artists/:id', controllers.updateArtist)

//albums
router.get('/albums', controllers.getAllAlbums)
router.get('/albums/:id', controllers.getAlbumByID)
router.get('/albums/:id/artist', controllers.getAlbumsByArtist)
router.post('/albums', controllers.createAlbum)
router.delete('/albums/:id', controllers.deleteAlbum)
router.put('/albums/:id', controllers.updateAlbum)

//songs
router.get('/songs', controllers.getAllSongs)
router.get('/songs/:id/album', controllers.getSongsByAlbum)
router.post('/songs', controllers.createSong)
router.delete('/songs/:id', controllers.deleteSong)
router.put('/songs/:id', controllers.updateSong)

//user 
router.get('/users', controllers.getUsers)
router.post('/register', controllers.createUser)
router.post('/login',controllers.login)
router.delete("/users/:id", controllers.deleteUser)

module.exports = router;