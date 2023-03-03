const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/shop",{
    useNewUrlParser:true,useUnifiedTopology:true
},(error)=>{
    if(error)console.log(error);
})

const sessioSchema = new mongoose.Schema({
    auth:String,
    ostoskori:String
},{collection:"sessiot"})

const SessioModel = mongoose.model("sessiot", sessioSchema)

module.exports = SessioModel