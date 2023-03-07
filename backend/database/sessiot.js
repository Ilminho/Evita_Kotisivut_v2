const mongoose = require('mongoose')

const PASSWORD = "mooctest"

const url = `mongodb+srv://Ilminho:${PASSWORD}@cluster0.nfgcz.mongodb.net/evitaDB?retryWrites=true&w=majority`



/*
mongoose.connect(uri,{
    useNewUrlParser:true,useUnifiedTopology:true
},(error)=>{
    if(error)console.log(error);
})
*/


const sessioSchema = new mongoose.Schema({
    auth:String,
    ostoskori:String
},{collection:"sessiot"})

mongoose.connect(url)
const SessioModel = mongoose.model("sessiot", sessioSchema)

module.exports = SessioModel