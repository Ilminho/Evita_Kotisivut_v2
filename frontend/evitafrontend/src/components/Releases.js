/* eslint-disable */ 

import DivLine from './DivLine';
import Spotify from "react-spotify-embed"
import Youtube from "react-youtube"
import { useEffect } from 'react';


const Releases = ()=>{

    useEffect(()=>{
        window.scrollY>800?window.scrollTo(0,800):console.log("nada");
      },[])

    const opts = {
        height: '390',
        width: '640'
    }

    const kassa = ["Emilia Mäenmaa: laulu, kitara, syntetisaattori", "Vita Edvards: laulu, taustalaulu, syntetisaattori","Lauri Kallio: kitara, basso"]
    const lahto = ["Emilia Mäenmaa: laulu, kitara, taustalaulu","Vita Edvards: laulu, taustalaulu", "Lauri Kallio: kitara, basso","Aleksi Lintunen: piano"]
    const kassaVideo = "Käsikirjoitus: Vita Edvards & Emilia Mäenmaa \n Ohjaus: Vita Edvards & Emilia Mäenmaa \n Näyttelijä: Miriam Bourgeot \n Kuvaus: Tuva Björk" 
    + "\n  Valaisu: Miikka Pirinen \n  Puvustus & lavastus: Vita Edvards \n  Puvustus & lavastus: Vita Edvards \n  Puvustus & lavastus: Vita Edvards \n  Värimäärittely: Mikko Kananoja"

    const lahtoVideo = "Kuvaus: Vita Edvards Konsepti: Vita Edvards & Emilia Mäenmaa Leikkaus: Vita Edvards"


    return(
        <div className='Releases'>

            <Spotify link='https://open.spotify.com/track/3hezGdViqizLteDrIqP5pk?si=bfe37371734e40d3' className='Spotify'/>
            {lahto.map(tiedot=><><h4>{tiedot}</h4><br/></>)}
            <DivLine/>
            <Spotify link='https://open.spotify.com/track/1IgGTbeEIynVWWC0rsOUvE?si=ccb009ed6c9e4762' className='Spotify'/>
            {kassa.map(tiedot=><><h4>{tiedot}</h4><br/></>)}
            <DivLine/>
            <Youtube videoId='ihHtDX78Jzk' className='Youtube' opts={opts} />
            <p>{lahtoVideo}</p>
            <DivLine/>
            <Youtube videoId='HklzfTst87E' className='Youtube' opts={opts}/>
            <p>{kassaVideo}</p>
            <p>{}</p>
        </div>
    )
}

export default Releases