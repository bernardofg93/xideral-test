import React from "react";
import Paper from "@mui/material/Paper";
import Table from '@mui/material/Table';
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import {Link} from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import {ROUTE_CONSTANTS} from "../../../data/RouteConstants";
import {Switch} from "../Switch";
import DeleteIcon from '@mui/icons-material/Delete';

const CustomTable = ({data, onChange, openConfirm, openDialog}: any) => {
   return (
      <TableContainer component={Paper} style={{overflowX: 'auto', width: '100%'}}>
         <Table aria-label="simple table" style={{minWidth: 700}}>
            <TableHead>
               <TableRow>
                  <TableCell sx={{fontWeight: 'bold'}} align="center">Name</TableCell>
                  <TableCell sx={{fontWeight: 'bold'}} align="center">Email</TableCell>
                  <TableCell sx={{fontWeight: 'bold'}} align="center">Rol</TableCell>
                  <TableCell sx={{fontWeight: 'bold'}} align="center">Status</TableCell>
                  <TableCell sx={{fontWeight: 'bold'}} align="center">Edit</TableCell>
                  <TableCell sx={{fontWeight: 'bold'}} align="center">Delete</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {data?.map((row: any, index: number) => (
                  <TableRow
                     key={row?.id}
                     sx={{'&:last-child td, &:last-child th': {border: 0}}}
                  >
                     <TableCell align="center">{row?.name}</TableCell>
                     <TableCell align="center">{row?.email}</TableCell>
                     <TableCell align="center">{row?.rol}</TableCell>
                     <TableCell align="center">
                        {row?.status}
                        <Switch
                           status={row?.status}
                           index={index}
                           onChange={onChange}
                        />
                     </TableCell>
                     <TableCell align="center">
                        <Link to={`${ROUTE_CONSTANTS.USER_CREATE}/${index}`}>
                           <EditIcon
                              color="primary"
                              sx={{
                                 cursor: 'pointer'
                              }}
                           />
                        </Link>
                     </TableCell>
                     <TableCell align="center">
                           <DeleteIcon
                              color="error"
                              onClick={() => openConfirm(index)}
                              sx={{
                                 cursor: 'pointer'
                              }}
                           />
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   )
}
export default CustomTable;
