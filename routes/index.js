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
router.post('/albums', controllers.createAlbum)
router.delete('/albums/:id', controllers.deleteAlbum)
router.put('/albums/:id', controllers.updateAlbum)

//songs
router.get('/songs', controllers.getAllSongs)
router.post('/songs', controllers.createSong)
router.delete('/songs/:id', controllers.deleteSong)
router.put('/songs/:id', controllers.updateSong)



module.exports = router;