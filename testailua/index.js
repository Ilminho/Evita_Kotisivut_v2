const express = require('express')
const mongoose = require('mongoose')
const app = express()



mongoose.connect("mongodb://localhost:27017/shop",{
    useNewUrlParser:true,useUnifiedTopology:true

},(error)=>{
    if(error)console.log(error);
})
const testiSchema = new mongoose.Schema({
    aika:String,
    kaupunki:String,
    keikkapaikka:String,
    maps:String,
    liput:String
},{collection:"keikat"})


mongoose.set('strictQuery',false)
const testailuCollection = mongoose.model('keikat',testiSchema)
app.get("/get", async (req,res)=>{
    const jtn = await testailuCollection.create({aika:"12.07.1995",kaupunki:"Helsinki",keikkapaikka:"Tavastia", maps:"www.google.com",liput:"www.google.com"})
    const vastaus = await testailuCollection.find({},{_id:0})
    res.send(vastaus)
})

app.post("/post",async (req,res)=>{
        const vastaus = await testailuCollection.collection.insertOne({nimi:"Kokeilu", Ilkka:false})
        res.send(vastaus)
})

app.listen("3003",()=>{
    console.log("Onnistui");
})




