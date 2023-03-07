/* eslint-disable */ 

import DivLine from "./DivLine"
import cheek from "../images/cheek.jpg"
import lahtoMusa from "../images/Musiikkivideo.png"
import { useEffect } from "react"


const Info = ()=>{

    useEffect(()=>{
        window.scrollY>800?window.scrollTo(0,800):console.log("nada");
      },[])

    return(
        <div className="Info">

            <div className="Esittelyt">
                <h1>Evita</h1>


        
                

                Evita on Emilia Mäenmaan ja Vita Edvardsin muodostama yhtye Helsingistä. Mäenmaa ja Edvards ovat rakentaneet vuosikymmenen ystävyyttä,
                yhteistä maailmaa ja estetiikkaa, joka materialisoituu alkuvuonna 2023 julkaistavana EP:nä. EP tarjoilee kuulijoilleen viiden kappaleensa kautta viisi 
                erilaista maailmaa. <br/><br/>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor urna nunc id cursus metus aliquam. Arcu risus quis varius quam quisque id diam vel quam. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Risus sed vulputate odio ut enim. Diam maecenas sed enim ut sem viverra aliquet eget sit. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Fermentum iaculis eu non diam phasellus vestibulum. Tincidunt praesent semper feugiat nibh sed. Tellus orci ac auctor augue mauris augue neque gravida in. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Ante metus dictum at tempor commodo ullamcorper. Nulla aliquet enim tortor at auctor. Varius quam quisque id diam vel quam. Hendrerit dolor magna eget est lorem ipsum dolor. Pellentesque elit eget gravida cum sociis natoque. Mattis vulputate enim nulla aliquet porttitor lacus. Augue ut lectus arcu bibendum at varius vel. Nunc congue nisi vitae suscipit tellus mauris a. 
                <br/><br/>
               Id donec ultrices tincidunt arcu non sodales neque sodales. Eu mi bibendum neque egestas congue quisque egestas. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Diam volutpat commodo sed egestas egestas. Eu consequat ac felis donec. Dolor sed viverra ipsum nunc aliquet bibendum. Vulputate mi sit amet mauris commodo quis imperdiet. Urna et pharetra pharetra massa massa ultricies mi. Sit amet commodo nulla facilisi nullam. Quis commodo odio aenean sed adipiscing diam donec. In ante metus dictum at tempor commodo ullamcorper. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Nam libero justo laoreet sit.
                
 
            </div>
            <DivLine/>

            <img src={lahtoMusa}/>
            <DivLine/>


            <img src={cheek}/>

            
        </div>
    )
}

export default Info