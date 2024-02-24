import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks: [],
}

const taskSlice = createSlice({
    name: 'taskSlice',
    initialState: {
      value: 0
    },
    reducers: {
      incremented: state => {
        state.value += 1
      },
      decremented: state => {
        state.value -= 1
      }
    }
  })

  export default taskSlice.reducer;