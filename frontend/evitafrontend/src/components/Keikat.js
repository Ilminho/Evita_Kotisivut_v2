import { useEffect } from "react";

const Keikat = ()=>{

    useEffect(()=>{
        window.scrollY>800?window.scrollTo(0,800):console.log("nada");
      },[])

    const keikat = [
        {paikka:"Tavastia", pvm:"12.07.1995", liput:"https://www.tiketti.fi/maustetytot-hullu-poro-areena-levi-lippuja/87875 "},
        {paikka:"Joensuun kuppila", pvm:"20.02.2002", liput:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
    ]

    return(
        <div className="Keikat">
            <h1>Keikat</h1>
            {keikat.map(keikka=><div key={keikka.pvm+keikka.paikka} className="YksiKeikka">
                <div>
                    <h2>{keikka.paikka}</h2>
                </div>
                <div>
                    <h2>{keikka.pvm}</h2>
                </div>
                <div>
                    <form>
                        <button formAction={keikka.liput} formTarget="_blank"> Osta liput</button>
                    </form>
                </div>
                
                
            </div>)}
        </div>
    )
}

export default Keikat