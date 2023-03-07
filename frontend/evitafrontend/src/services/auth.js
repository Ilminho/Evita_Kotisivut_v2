import axios from "axios"
import Cookies from "js-cookie"
axios.defaults.withCredentials = false

const BASEURL = "http://localhost:3001/"

const setAuth = async() =>{

    const response = await axios.get(BASEURL,{headers:{
        Authorization:Cookies.get('auth')
    }})
    
}

const sendOstoskori = async (ostoskori)=>{
    const response = await axios.put(BASEURL+"sessio/" + Cookies.get('auth'),{ostoskori:ostoskori},{headers:{
        Authorization:Cookies.get('auth')
    }})
    return response.status===200
}

const getOstoskori = async ()=>{
    const response = await axios.get(BASEURL+"sessio/"+Cookies.get('auth'),{headers:{
        Authorization:Cookies.get('auth')
    }})

    console.log("Get ostoskori");
    console.log(response);

    if(response.status===200)
        return response.data
    else
        return []
}



export default {setAuth, sendOstoskori, getOstoskori}
