import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: [] }

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setBlogs: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setBlogs } = blogSlice.actions

export default blogSlice.reducer