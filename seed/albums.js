const db = require ('../db')
const Artist = require ('../models/artist')
const Album = require('../models/album')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const HailTheSun = await Artist.find({name:"Hail The Sun"})
    const LornaShore = await Artist.find({name:"Lorna Shore"})
    const Sum41 = await Artist.find({name:"Sum 41"})
    const Erra = await Artist.find({name:"ERRA"})
    const Periphery = await Artist.find({name:"Periphery"})

    const albums = [
    {artist: "Hail The Sun", artist_id: HailTheSun[0]._id, name: "Wake", image:"https://f4.bcbits.com/img/a1584236675_16.jpg", tracks: 12, released: 2014, runtime:"52 minutes"} ,
    {artist: "Lorna Shore", artist_id: LornaShore[0]._id, name:"...And I Return To Nothingness(EP)", image:"https://m.media-amazon.com/images/I/71xg1uaSm3L._SL1500_.jpg", tracks: 3, released: 2021, runtime: "18 minutes" },
    {artist:"Sum 41", artist_id: Sum41[0]._id, name:"All Killer No Filler", image:"https://www.udiscovermusic.com/wp-content/uploads/2017/05/Sum-41-All-Killer-No-Filler-album-cover-web-optimised-820.jpg", tracks: 13 , released: 2001, runtime: "32 minutes"},
    {artist: "ERRA", artist_id: Erra[0]._id, name:"Impulse", image:"https://e.snmc.io/i/600/s/6fb271d76e97270a36161363bd7461ee/6243370/erra-impulse-Cover-Art.jpg", tracks: 10, released: 2011, runtime: "39 minutes"},
    {artist: "Periphery", artist_id: Periphery[0]._id, name:"Periphery III: Select Dificulty", image:"http://images.genius.com/b38edd1705794e3c9139847b97e17e6d.650x650x1.jpg", tracks: 11, released: 2016, runtime: "64 minutes"},

    ]
    await Album.insertMany(albums)
    console.log('Created albums!')
}

const run = async()=>{
    await main()
    db.close()
}

run()