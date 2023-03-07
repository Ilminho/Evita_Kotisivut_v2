const mongoose = require('mongoose')

const PASSWORD = "mooctest"

const url = `mongodb+srv://Ilminho:${PASSWORD}@cluster0.nfgcz.mongodb.net/evitaDB?retryWrites=true&w=majority`

mongoose.connect(url,{
    useNewUrlParser:true,useUnifiedTopology:true
},(error)=>{
    if(error)console.log(error);
})

const keikatSchema = new mongoose.Schema({
    aika:String,
    kaupunki:String,
    keikkapaikka:String,
    maps:String,
    liput:String
},{collection:"keikat"})

const KeikatModel = mongoose.model("keikat", keikatSchema)

module.exports = KeikatModel


