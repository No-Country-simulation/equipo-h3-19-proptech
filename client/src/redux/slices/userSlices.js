import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      role: 'INVERSOR'
    }
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload
    },
    clearUser: (state) => {
      state.user = { role: 'GUEST' }
    }
  }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
