import { createSlice } from "@reduxjs/toolkit";


const initialState = []
const ostoskoriSlice = createSlice({
    name:"ostoskori",
    initialState,
    reducers:{
        addOstos(state,action){
            state.push(action.payload)
        }
    }
})

export const addTuote = (ostos)=>{
    return async dispatch=>{
        let nimi = ostos.nimi?ostos.nimi:""
        let tyyppi = ostos.tyyppi?ostos.tyyppi:""
        dispatch(addOstos(ostos))    
    }
}



export const {addOstos} = ostoskoriSlice.actions

export default ostoskoriSlice.reducer