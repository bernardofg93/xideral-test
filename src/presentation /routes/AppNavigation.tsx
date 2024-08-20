import { Routes, Route, BrowserRouter } from "react-router-dom";
import {Board} from "../pages/Board";
import {ROUTE_CONSTANTS} from "../data/RouteConstants";
import {Users} from "../pages/Users";
import {UserCreate} from "../pages/UserCreate";

const AppNavigation = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<Board />} path={ROUTE_CONSTANTS.BOARD}>
               <Route element={<Users />} path={ROUTE_CONSTANTS.USERS} />
               <Route element={<UserCreate />} path={ROUTE_CONSTANTS.USER_CREATE} />
               <Route path={ROUTE_CONSTANTS.USER_UPDATE} element={<UserCreate />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}
export default AppNavigation;
