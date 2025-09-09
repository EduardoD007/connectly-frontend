import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import InterfaceUserState from "../../interfaces/InterfaceUserState";
import { api } from "../../api/api";
import InterfaceUser from "../../interfaces/InterfaceUser";

export const getUser = createAsyncThunk<InterfaceUser[], string>(
  'userReducer/getUser',
  async (id:string): Promise<InterfaceUser[]> => {
    const response = await api.getUser(id)
    const data = await response
    return data as InterfaceUser[]
  }
)

export const getAllUsers = createAsyncThunk<InterfaceUser[]>(
  'userReducer/getAllUsers',
  async (): Promise<InterfaceUser[]> => {
    const response = await api.getUsers();
 
    return await response as InterfaceUser[]
  }
)

export const saveUsertoFollow = createAsyncThunk<InterfaceUser[], { id: string; username: string }>(
  'userReducer/saveUsertoFollow',
  async ({ id, username }): Promise<InterfaceUser[]> => {
    const response = await api.saveFollowing(id, username)
    return response as InterfaceUser[]
  }
)

export const deleteUsertoFollow = createAsyncThunk<InterfaceUser[], { id: string; username: string }>(
  'userReducer/deleteUsertoFollow',
  async ({ id, username }): Promise<InterfaceUser[]> => {
    const response = await api.deleteFollowing(id, username)
    return response as InterfaceUser[]
  }
)

const estadoInicial: InterfaceUserState = {
  allUsers:[],
  selectedUser: [],
  following: "",
  status: 'idle',
  erro: null
}

const userSlice = createSlice({
  name: 'user',
  initialState: estadoInicial,
  reducers:{

  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = 'sucesso'
        const response = action.payload
        state.selectedUser = response
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = 'falha'
        state.erro = action.error.message?? "Erro"
      })
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getAllUsers.fulfilled, (state, action ) => {
        state.status = 'sucesso'
        state.allUsers = action.payload})
      .addCase(getAllUsers.rejected, (state, action) => {
        state.status = 'falha'
        state.erro = action.error.message?? "Erro"
      })
    builder
      .addCase(saveUsertoFollow.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(saveUsertoFollow.fulfilled, (state, action ) => {
        state.status = 'sucesso'
        state.allUsers = action.payload})
      .addCase(saveUsertoFollow.rejected, (state, action) => {
        state.status = 'falha'
        state.erro = action.error.message?? "Erro"
      })
     builder
      .addCase(deleteUsertoFollow.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(deleteUsertoFollow.fulfilled, (state, action ) => {
        state.status = 'sucesso'
        state.allUsers = action.payload})
      .addCase(deleteUsertoFollow.rejected, (state, action) => {
        state.status = 'falha'
        state.erro = action.error.message?? "Erro"
      })  
  },
  
})

export default userSlice.reducer