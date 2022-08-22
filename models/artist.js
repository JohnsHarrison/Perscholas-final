const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Artist = new Schema(
    {
        name:{type: String, required:true},
        image:{type: String, required:false},
        released:{type: String, required: false},
        runtime:{type: String, required: false}
    },
    {timestamps:true }
)

module.exports = mongoose.model('artists', Artist)