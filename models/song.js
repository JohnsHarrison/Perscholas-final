const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Song = new Schema(
    {
        name:{type: String, required:true},
        artist_name:{type: String, required:false},
        album_name:{type: String, required:false},
        album_id:{type: Schema.Types.ObjectId, required:false},
        track_number:{type: Number, required: false},
        length:{type: String, required: false},
        explict:{ type: Boolean, required: false},
    },
    {timestamps:true}
)
module.exports = mongoose.model('songs', Song)