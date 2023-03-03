const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/shop",{
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


