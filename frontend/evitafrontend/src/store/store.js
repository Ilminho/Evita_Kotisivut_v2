import { configureStore } from '@reduxjs/toolkit'
import ostoskoriReducer from '../reducers/ostoskoriReducer'


const store = configureStore({
  reducer:{
    ostoskori: ostoskoriReducer
  }
})

export default store