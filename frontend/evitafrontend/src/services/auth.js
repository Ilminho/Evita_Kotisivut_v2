import axios from "axios"
import Cookies from "js-cookie"
const instance = axios.create({withCredentials:true})

const BASEURL = "http://localhost:3001/"

const setAuth = async() =>{

    const response = await instance.get(BASEURL)
    
}

const sendOstoskori = async (ostoskori)=>{
    const response = await instance.put(BASEURL+"sessio/" + Cookies.get('auth'),{ostoskori:ostoskori})
    return response.status===200
}

const getOstoskori = async ()=>{
    const response = await instance.get(BASEURL+"sessio/"+Cookies.get('auth'))

    console.log(response);

    if(response.status===200)
        return response.data
    else
        return null

}

export default {setAuth, sendOstoskori, getOstoskori}
