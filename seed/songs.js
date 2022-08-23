const db = require('../db')
const Album = require('../models/album')
const Song = require('../models/song')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
const Wake = await Album.find({name:"Wake"})
const Nothingness = await Album.find({name:"...And I Return To Nothingness(EP)"})
const NoFiller = await Album.find({name:"All Killer No Filler"})
const Impulse = await Album.find({name:"Impulse"})
const SelectDificulty = await Album.find({name:"Periphery III: Select Dificulty"})
const songs = [
    {name:"Rolling Out the Red Carpet", album_id: Wake[0]._id, track_number: 1, length: "2:05", explicit: false},
    {name:"Human Target Practice", album_id: Wake[0]._id, track_number: 2, length: "3:54", explicit: false},
    {name:"Black Serotonin", album_id: Wake[0]._id, track_number: 3, length: "5:02", explicit: true},
    {name:"Mourning Sickness", album_id: Wake[0]._id, track_number: 4, length: "5:00", explicit: false},
    {name:"Falling On Deaf Ears", album_id: Wake[0]._id, track_number: 5, length: "5:17", explicit: false},
    {name:"Cosmic Narcissism", album_id: Wake[0]._id, track_number: 6, length: "4:52", explicit: false},
    {name:"Relax/Divide", album_id: Wake[0]._id, track_number: 7, length: "3:18", explicit: true},
    {name:"Disappearing Syndrome", album_id: Wake[0]._id, track_number: 8, length: "5:20", explicit: true},
    {name:"Missed Injections", album_id: Wake[0]._id, track_number: 9, length: "3:37", explicit: false},
    {name:"Hanging Revelation", album_id: Wake[0]._id, track_number: 10, length: "5:26", explicit: false},
    {name:"Jane Doe", album_id: Wake[0]._id, track_number: 11, length: "2:51", explicit: false},
    {name:"Anti-Eulogy(I Hope You Stay Dead)", album_id: Wake[0]._id, track_number: 12, length: "5:12", explicit:false},
    {name:"To The Hellfire", album_id: Nothingness[0]._id, track_number: 1, length: "6:09", explicit: true},
    {name:"Of the Abyss", album_id: Nothingness[0]._id, track_number: 2, length: "5:43", explicit: false},
    {name:"And I Return to Nothingness", album_id: Nothingness[0]._id, track_number: 3, length: "6:10", explicit: false},
    {name:"Introduction To Destruction", album_id: NoFiller[0]._id, track_number:1, length: "3:01", explicit: false},
    {name:"Nothing On My Back", album_id: NoFiller[0]._id, track_number: 2, explicit: false},
    {name:"Never Wake Up", album_id: NoFiller[0]._id, track_number: 3, length: "0:49", explicit: false},
    {name:"Fat Lip", album_id: NoFiller[0]._id, track_number: 4, length: "2:58", explicit: true},
    {name:"Rythms", album_id: NoFiller[0]._id, track_number: 5, length: "2:58", explicit: false},
    {name:"Motivation", album_id: NoFiller[0]._id, track_number: 6,  length: "2:49", explicit: false},
    {name:"In Too Deep", album_id: NoFiller[0]._id, track_number: 7, length: "3:27", explicit: false},
    {name:"Summer", album_id: NoFiller[0]._id, track_number: 8, length: "2:49", explicit: false},
    {name:"Handle This", album_id: NoFiller[0], track_number: 9, length:"3:37", explicit: false},
    {name:"Crazy Amanad Bunkface", album_id: NoFiller[0], track_number: 10, length: "2:15", explicit: false},
    {name:"All She's Got", album_id: NoFiller[0]._id, track_number:11, length: "2:21", explicit: false},
    {name:"Heart Attack", album_id: NoFiller[0]._id, track_number: 12, length: "2:48", explicit: false},
    {name:"Pain For Pleasure", album_id: NoFiller[0]._id, track_number: 13, length: "1:43", explicit:false},
    {name:"White Noise", album_id: Impulse[0]._id, track_number: 1, length: "4:02", explicit: false},
    {name:"Pattern Interrupt", album_id: Impulse[0]._id, track_number: 2, length: "3:09", explicit: false},
    {name:"Seven", album_id: Impulse[0]._id, track_number: 3, length: "3:17", explicit: false},
    {name:"The Architect", album_id: Impulse[0]._id, track_number: 4, length: "3:15", explicit: false},
    {name:"Efflorescent", album_id: Impulse[0]._id, track_number:5, length: "3:58", explicit: false},
    {name:"Vaalbara", album_id: Impulse[0]._id, track_number: 6, length: "4:14", explicit: false},
    {name:"Heart", album_id: Impulse[0]._id, track_number: 7, length: "3:31", explicit: false},
    {name:"Obscure Words", album_id: Impulse[0]._id, track_number: 8, length: "3:04", explicit: false},
    {name:"Invent", album_id: Impulse[0]._id, track_number: 9, length: "4:42", explicit: false},
    {name:"Render The Void", album_id: Impulse[0]._id, track_number: 10, length: "5:47", explicit: false},
    {name:"The Price Is Wrong", album_id: SelectDificulty[0]._id, track_number: 1, length: "3:56", explicit: true},
    {name:"Motormouth", album_id: SelectDificulty[0]._id, track_number: 2, length: "4:50", explicit: true},
    {name:"Marigold", album_id: SelectDificulty[0]._id, track_number: 3, length: "7:49", explicit: false},
    {name:"The Way The News Goes...", album_id: SelectDificulty[0]._id, track_number: 4, length: "5:03", explicit: true},
    {name:"Remain Indoors", album_id: SelectDificulty[0]._id, track_number: 5, length: "6:10", explicit: true},
    {name:"Habitual Line-Stepper", album_id: SelectDificulty[0]._id, track_number: 6, length: "6:52", explicit: true},
    {name:"Flateline", album_id: SelectDificulty[0]._id, track_number: 7, length: "5:50", explicit: false},
    {name:"Absolomb", album_id: SelectDificulty[0]._id, track_number: 8, length: "7:43", explicit: false},
    {name:"Catch Fire", album_id: SelectDificulty[0]._id, track_number: 9, length: "3:53", explicit: true},
    {name:"Prayer Position", album_id: SelectDificulty[0]._id, track_number: 10, length: "4:36", explicit: true},
    {name:"Lune", album_id: SelectDificulty[0]._id, track_number: 11, length: "7:47", explicit: false},

]
 await Song.insertMany(songs)
console.log('Created songs!')

}
const run = async()=>{
    await main()
    db.close()
}

run()