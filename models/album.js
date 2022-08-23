const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Album = new Schema(
    {
        artist:{type: String, required:true},
        artist_id:{type: Schema.Types.ObjectId, required:false},
        name:{type: String, required:true},
        image:{type: String, required:false},
        tracks:{type: Number, required: false},
        released:{type: Number, required: false},
        runtime:{type: String, required: false}
    },
    {timestamps:true }
)

module.exports = mongoose.model('albums', Album)