import { createSlice, PayloadAction } from "@reduxjs/toolkit"


const estadoInicial = {
  activeTab: "feed"
}

const tabSlicer = createSlice({
  name: 'tabChance',
  initialState: estadoInicial,
  reducers: {
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    }
  }
})

export const { setActiveTab } = tabSlicer.actions
export default tabSlicer.reducer