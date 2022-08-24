const {Router} = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req,res) => res.send('This is the root'))
router.get('/albums', controllers.getAllAlbums)
router.get('/albums/:id', controllers.getAlbumByID)
router.get('/artists', controllers.getAllArtists)
router.get('/artists/:id', controllers.getArtistByID)
router.get('/songs', controllers.getAllSongs)



module.exports = router;