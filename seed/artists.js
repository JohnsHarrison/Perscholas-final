const db = require ('../db')
const Artist = require ('../models/artist')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const artists = [
        {name:"Hail The Sun", image:"https://cdn1.sixthman.net/2021/coheed/images/artists/webp/5116.jpg", genre: "Post Hardcore"},
        {name:"Lorna Shore", image:"https://townsquare.media/site/366/files/2022/06/attachment-lorna_shore_2022.jpg", genre: "Death Core"},
        {name:"Sum 41", image:"https://www.nme.com/wp-content/uploads/2022/07/MAIN-PROMO-1_Ashley_Osborn-1392x884.jpg", genre: "Pop Punk"},
        {name:"ERRA", image:"https://www.rocksound.tv/assets/uploads/erra_2022.jpg", genre:"Progressive Metalcore"},
        {name:"Periphery", image:"https://townsquare.media/site/366/files/2019/02/Periphery-2019.jpg?w=980&q=75", genre:"Djent"}
    ]
    await Artist.insertMany(artists)
    console.log('Created artists!')
}

const run = async()=>{
    await main()
    db.close()
}

run()