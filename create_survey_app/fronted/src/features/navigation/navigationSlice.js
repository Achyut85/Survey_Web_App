import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  active: 1,
  currentPage:"home"
}

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
      setActive:(state, action) =>{
        state.active = action.payload
      },
      setPage:(state, action) =>{
        state.currentPage = action.payload
      }
    },
  })

  export const {setActive , setPage} = navigationSlice.actions
  export default navigationSlice.reducer