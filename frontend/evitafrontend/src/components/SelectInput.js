/* eslint-disable */ 

import { useState } from "react"

const SelectInput=(props)=>{

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
                    {tuoteTyypit.map(value=><div key={value}
                     onClick={()=>{
                        setValue(value);
                        props.changeTyyppi(props.tuotteet.filter(e=>e.tyyppi===value)); 
                        showSelection()
                    }} 
                    className="" > 
                {value}</div>)}
                    </div>
                :<></>
            }
            </div>
            
        </div>

    )


}

export default SelectInput