import { createSlice } from "@reduxjs/toolkit";
import auth from "../services/auth";


const initialState = []
const ostoskoriSlice = createSlice({
    name:"ostoskori",
    initialState,
    reducers:{
        setOstokset(state,action){
            return action.payload
        },
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

export const initializeOstoskori = ()=>{

    return async dispatch =>{
            const initOstoskori = await auth.getOstoskori()
            dispatch(setOstokset(initOstoskori))
    }
}

export const addTuote = (ostos)=>{
    return async dispatch=>{
        console.log("jtn5");
        dispatch(addOstos(ostos))

    }
}

export const removeAll = ()=>{
    return async dispatch=>{
        dispatch(deleteAll())
        auth.sendOstoskori([])
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



export const {addOstos, deleteAll, addYksi, minusYksi, deleteOne, setOstokset} = ostoskoriSlice.actions

export default ostoskoriSlice.reducer