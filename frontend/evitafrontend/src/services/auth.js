import axios from "axios"
import Cookies from "js-cookie"
axios.defaults.withCredentials = true

const BASEURL = "http://localhost:3001/"

const setAuth = async() =>{

    const response = await axios.get(BASEURL)
    
}

const sendOstoskori = async (ostoskori)=>{
    const response = await axios.put(BASEURL+"sessio/" + Cookies.get('auth'),{ostoskori:ostoskori})
    return response.status===200
}

const getOstoskori = async ()=>{
    const response = await axios.get(BASEURL+"sessio/"+Cookies.get('auth'))

    if(response.status===200)
        return response.data
    else
        return null
}



export default {setAuth, sendOstoskori, getOstoskori}
