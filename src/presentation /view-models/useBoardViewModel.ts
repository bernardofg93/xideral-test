import {useFetchUsersQuery} from "../store/apiSlice/apiSlice";
import {useSelector, useDispatch} from "react-redux";
import {StoreTypes} from "../types/stateTypes";
import {User} from "../../Domain/entities/User";
import {
   setUsers,
   setFilter,
   setAlert,
   setUser,
   updateUser,
   updateStatus,
   deleteUser,
   setOpenDialog,
   setIndexNumber
} from "../store/features/app-slice";

const useBoardViewModel = () => {
   const dispatch = useDispatch();
   const {
      users,
      filter,
      isActiveAlert,
      messageAlert,
      user,
      openDialog,
      indexUser
   } = useSelector((state: StoreTypes) => state.AppReducer);

   const {
      data: userData,
      isFetching: isFetchingUsersData,
      isSuccess: isSuccessFetchData
   } = useFetchUsersQuery({});

   return {
      userData,
      isFetchingUsersData,
      isSuccessFetchData,
      users,
      filter,
      isActiveAlert,
      messageAlert,
      user,
      openDialog,
      indexUser,
      setUsers: (users: User[]) => dispatch(setUsers(users)),
      setFilter: (users: User[]) => dispatch(setFilter(users)),
      setAlert: (alertState: object) => dispatch(setAlert(alertState)),
      setUser: (user: object) => dispatch(setUser(user)),
      updateUser: (user: object) => dispatch(updateUser(user)),
      updateStatus: (status: object) => dispatch(updateStatus(status)),
      deleteUser: (index: number) => dispatch(deleteUser(index)),
      setOpenDialog: (state: boolean) => dispatch(setOpenDialog(state)),
      setIndexNumber: (index: number) => dispatch(setIndexNumber(index))
   }
}
export default useBoardViewModel;
