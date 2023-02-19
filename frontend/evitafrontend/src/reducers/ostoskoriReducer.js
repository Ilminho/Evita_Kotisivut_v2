import { createSlice } from "@reduxjs/toolkit";


const initialState = [{nimi:"Evita EP", tyyppi:"CD", hinta:15, kuva:"../images/Evita sinkun kansi 1.jpg", maara:1}]
const ostoskoriSlice = createSlice({
    name:"ostoskori",
    initialState,
    reducers:{
        addOstos(state,action){
            state.push(action.payload)
        },
        deleteAll(state,action){
            return[]
        },
        addYksi(state,action){
            const id=action.payload
            let changeTuote = state[id]
            const tuoteToChange={
                ...changeTuote,
                maara:changeTuote.maara+1
            }

            return state.map((tuote,index)=>index===id?tuoteToChange:tuote)

        },
        minusYksi(state,action){
            const id=action.payload
            let changeTuote = state[id]
            const tuoteToChange={
                ...changeTuote,
                maara:changeTuote.maara<1?0:changeTuote.maara-1
            }
            return state.map((tuote,index)=>index===id?tuoteToChange:tuote)
        },
        deleteOne(state,action){
            return state.filter((tuote,index)=>index!==action.payload)
        }
    }
})

export const addTuote = (ostos)=>{
    return async dispatch=>{
        console.log("jtn5");
        dispatch(addOstos(ostos))    
    }
}

export const removeAll = ()=>{
    return async dispatch=>{
        dispatch(deleteAll())
    }
}

export const plusOne = (id)=>{
    return dispatch=>{
        dispatch(addYksi(id))
    }
}
export const minusOne = (id)=>{
    return dispatch=>{
        dispatch(minusYksi(id))
    }
}

export const poistaYksi = (id)=>{
    return dispatch=>{
        dispatch(deleteOne(id))
    }
}



export const {addOstos, deleteAll, addYksi, minusYksi, deleteOne} = ostoskoriSlice.actions

export default ostoskoriSlice.reducer