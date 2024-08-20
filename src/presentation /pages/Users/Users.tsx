import Table from "../../components/ui/Table/Table";
import useBoardController from "../../view-controllers/useBoardController";
import {Confirm} from "../../components/ui/Confirm";

const Users = () => {

   const {
      filter,
      onChangeStatus,
      setOpenDialog,
      openConfirm
   } = useBoardController();

   return (
      <>
         <Confirm/>
         <Table
            openDialog={setOpenDialog}
            openConfirm={openConfirm}
            onChange={onChangeStatus}
            data={filter}
         />
      </>
   )
}
export default Users;
