const mongoose = require("mongoose")

let MONGODB_URI = process.env.PROD_MONGODB || process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/musicDatabase"


mongoose.connect( MONGODB_URI,{
    useUnifiedTopology: true, useNewUrlParser:true
}).then(()=>{
    console.log('successfully connected to MongoDB');
}).catch(e =>{
    console.error('connetion error', e.message)
})

//show the raw query mongo executes in the terminal
mongoose.set('debug', true)

const db = mongoose.connection

module.exports= db