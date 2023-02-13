import { useState } from "react"

const SelectInput=(props)=>{
    const dummyArray=["Ilkan","Joku toinen","asdasd"]
    const vaikeaDummyArray=[{tyyppi:"CD", varastossa:10, hinta:15}, {tyyppi:"Kasetti", varastossa:5, hinta:10},{tyyppi:"Vinyyli", varastossa:0, hinta:20}]
    const vaikeaHelpoksi=vaikeaDummyArray.map(tuote=>tuote.tyyppi)

    const tuoteTyypit=props.tuotteet.map(tuote=>tuote.tyyppi)


    const [show, setShow]=useState(false)
    const [value, setValue]=useState(tuoteTyypit[0])

    const showSelection = ()=>{ 
        setShow(!show)
    }






    return(
        <div className="dropdown">
            <div className="" onClick={showSelection}>
                {value}
            {show?
                <div className="dropdownContent">
                    {tuoteTyypit.map(value=><div key={value} onClick={()=>{setValue(value);props.changeTyyppi(props.tuotteet.filter(e=>e.tyyppi===value)[0]); showSelection()}} className="" > 
                {value}</div>)}
                    </div>
                :<></>
            }
            </div>
            
        </div>

    )


}

export default SelectInput