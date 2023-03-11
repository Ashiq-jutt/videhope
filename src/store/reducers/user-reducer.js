import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  userInfo: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload
    },
    reset: (state, action) => {
      state = initialState
    },
  },
})
// Action creators are generated for each case reducer function
export const {
  setUserInfo,
  reset,
} = userSlice.actions

export default userSlice.reducer