import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const estadoInicial = {
  refreshPost: false
}

const refreshPostSlicer = createSlice({
  name: "refreshPost",
  initialState: estadoInicial,
  reducers: {
    setRefreshPostState: (state, action:PayloadAction<boolean>) => {
      state.refreshPost = action.payload
    }
  }
})

export const { setRefreshPostState } = refreshPostSlicer.actions
export default refreshPostSlicer.reducer