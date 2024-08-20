import useBoardViewModel from "../view-models/useBoardViewModel";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

const useBoardController = () => {
   const [searchTerm, setSearchTerm] = useState<string>('');

   const navigate = useNavigate();
   const {id} = useParams();

   const {
      filter,
      users,
      user,
      userData,
      isFetchingUsersData,
      isSuccessFetchData,
      indexUser,
      setUsers,
      setFilter,
      setUser,
      updateStatus,
      deleteUser,
      setOpenDialog,
      setIndexNumber
   } = useBoardViewModel();


   useEffect(() => {
      // @ts-ignore
      const user = users[id];
      if(user) setUser(user);
   }, [id]);

   useEffect(() => {
      if (isSuccessFetchData) {
         if (users?.length > 0) {
            setUsers(users);
            setFilter(users);
         } else {
            setUsers(userData);
         }
      }
   }, [isSuccessFetchData]);

   useEffect(() => {
      const results = filter?.filter(user =>
         user?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
         user?.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
         user?.rol?.toLowerCase().includes(searchTerm.toLowerCase()) ||
         user?.status?.toLowerCase().includes(searchTerm.toLowerCase()))
      if (searchTerm !== '') {
         setFilter(results)
      } else setFilter(users);
   }, [searchTerm, userData])

   const onChangeStatus = (e: any, index: any) => {
      updateStatus({
         index: index,
         status: e
      })
   }

   const openConfirm = (index: number) => {
      setOpenDialog(true);
      setIndexNumber(index)
   }

   const removeUser = () => {
      deleteUser(indexUser);
      setOpenDialog(false);
   }

   return {
      id,
      filter,
      users,
      userData,
      user,
      isFetchingUsersData,
      isSuccessFetchData,
      searchTerm,
      setSearchTerm,
      setUsers,
      updateStatus,
      onChangeStatus,
      deleteUser,
      setOpenDialog,
      removeUser,
      openConfirm,
      navigate
   }
}
export default useBoardController;
