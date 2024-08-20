import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import useBoardViewModel from "../../../view-models/useBoardViewModel";
import useBoardController from "../../../view-controllers/useBoardController";

const Confirm = () => {
   const {setOpenDialog, openDialog} = useBoardViewModel();
   const {removeUser, openConfirm} = useBoardController();

   return (
      <React.Fragment>
         <Dialog
            open={openDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
         >
            <DialogTitle id="alert-dialog-title">
               {"Are you sure you want to delete the user?"}
            </DialogTitle>

            <DialogActions>
               <Button onClick={() => setOpenDialog(false)}>Disagree</Button>
               <Button onClick={removeUser} autoFocus>
                  Agree
               </Button>
            </DialogActions>
         </Dialog>
      </React.Fragment>
   )

}
export default Confirm;
