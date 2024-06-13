// modalSlice.js
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IModal {
  create: boolean
  del: boolean
  edit?: IBook
}

const initialState: IModal = {
  create: false,
  del: false,
  edit: undefined,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setCreate: (state, action: PayloadAction<boolean>) => {
      state.create = action.payload
    },
    setDel: (state, action: PayloadAction<boolean>) => {
      state.del = action.payload
    },
    setEdit: (state, action: PayloadAction<IBook>) => {
      state.edit = action.payload
    },
    closeModal: (state) => {
      state.create = false
      state.del = false
      state.edit = undefined
    },
  },
})

export const { setCreate, setDel, setEdit, closeModal } = modalSlice.actions

export default modalSlice.reducer
