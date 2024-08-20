import * as React from 'react';
import Box from '@mui/material/Box';
import useStyles from "./useStyles";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import useBoardController from "../../../view-controllers/useBoardController";
import {ROUTE_CONSTANTS} from "../../../data/RouteConstants";
import {Typography} from "@mui/material";
import Divider from '@mui/material/Divider';

const Sidebar = () => {
   const {classesUseStyles} = useStyles();

   const {navigate} = useBoardController();

   return (
      <Box sx={classesUseStyles.sidebar}>
         <Box p={2}>
            <Typography
               color="#fff"
               textAlign="center"
               fontWeight="bold"
               fontSize={20}
            >
               Bernardo Flores
            </Typography>
         </Box>
         <Divider color="primary.main"/>
         <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={10}
            p={1}
            sx={{cursor: 'pointer'}}
            onClick={() => navigate(ROUTE_CONSTANTS.USER_CREATE)}
         >
            <PersonAddAltOutlinedIcon
               fontSize="medium"
               sx={{
                  color: '#fff',
                  cursor: 'pointer',
                  mr: 1
               }}
            />
            <Typography color="#fff" fontWeight="bold">
               Create user
            </Typography>
         </Box>

         <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={10}
            p={1}
            sx={{cursor: 'pointer'}}
            onClick={() => navigate(ROUTE_CONSTANTS.USERS)}
         >
            <FormatListBulletedIcon
               fontSize="medium"
               sx={{
                  color: '#fff',
                  cursor: 'pointer',
                  mr: 1
               }}
            />
            <Typography color="#fff" fontWeight="bold">
               List users
            </Typography>
         </Box>
      </Box>
   )
}
export default Sidebar;
