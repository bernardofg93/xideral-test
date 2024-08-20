import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {Search} from "../../ui/Search";
import useBoardController from "../../../view-controllers/useBoardController";

const Header = () => {

   const {setSearchTerm, searchTerm} = useBoardController();

   return (
      <Box sx={{flexGrow: 1}}>
         <AppBar position="static" color="secondary" enableColorOnDark sx={{p: 1}}>
            <Toolbar>
               <Search
                  value={searchTerm}
                  onChange={setSearchTerm}
               />
            </Toolbar>
         </AppBar>
      </Box>
   );
}
export default Header;
