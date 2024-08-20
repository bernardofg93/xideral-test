import {createSlice} from "@reduxjs/toolkit";
import {AppStateType} from "../../types/stateTypes";

const initialState: AppStateType = {
   users: [],
   filter: [],
   isActiveAlert: false,
   messageAlert: '',
   user: {},
   openDialog: false,
   indexUser: 0
}

const appSlice = createSlice({
   name: 'appSlice',
   initialState,
   reducers: {
      setUsers: (state, action) => {
         state.users = action.payload;
      },
      setFilter: (state, action) => {
         state.filter = action.payload;
      },
      setAlert: (state, action) => {
         state.isActiveAlert = action.payload.isActiveAlert;
         state.messageAlert = action.payload.messageAlert;
      },
      setUser: (state, action) => {
         state.user = action.payload;
      },
      updateUser: (state, action) => {
         const {index, values} = action.payload;
         state.users[index] = {
            ...state.users[index],
            ...values,
         };
      },
      updateStatus: (state, action) => {
         const {index, status} = action.payload;
         const user = state.users[index];
         if (status) {
            user.status = 'active'
         } else {
            user.status = 'inactive'
         }
         state.filter = [...state.users]
      },
      deleteUser: (state, action) => {
         state.filter.splice(action.payload, 1);
      },
      setOpenDialog: (state, action) => {
         state.openDialog = action.payload;
      },
      setIndexNumber: (state, action) => {
         state.indexUser = action.payload;
      }
   }
})
export const {
   setUsers,
   setFilter,
   setAlert,
   setUser,
   updateUser,
   updateStatus,
   deleteUser,
   setOpenDialog,
   setIndexNumber
} = appSlice.actions;
export default appSlice.reducer;
