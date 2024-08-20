import Box from "@mui/material/Box";
import {Sidebar} from "../../components/layout/Sidebar";
import {Header} from "../../components/layout/Header";
import {Container} from "@mui/material";
import { Outlet } from 'react-router-dom';

const Board = () => {
  return (
     <Container maxWidth='lg' >
        <Box display="flex">
           <Sidebar />
           <Box width="100%">
              <Header />
              <Box p={2} display="flex" flex={1}  justifyContent="center">
                 <Outlet />
              </Box>
           </Box>
        </Box>
     </Container>
  )
}
export default Board;
