import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import {useEffect} from "react";
import useBoardViewModel from "../../../view-models/useBoardViewModel";

const CustomAlert = () => {

   const {messageAlert, isActiveAlert, setAlert} = useBoardViewModel();

   useEffect(() => {
      setTimeout(() => {
         setAlert({
            isActiveAlert: false,
            messageAlert: ''
         })
      }, 2000)
   }, [isActiveAlert])

   if (!isActiveAlert) return null;

   return (
      <Alert
         icon={<CheckIcon fontSize="inherit" />}
         severity="success"
         sx={{mb: 3}}
      >
         {messageAlert}
      </Alert>
   );
}
export default CustomAlert;
