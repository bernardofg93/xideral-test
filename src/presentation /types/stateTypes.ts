import {User} from "../../Domain/entities/User";

export type StoreTypes = {
   AppReducer: AppStateType
}

export type AppStateType = {
   users: User[];
   filter: User[];
   isActiveAlert: boolean,
   messageAlert: string,
   user: any,
   openDialog: boolean,
   indexUser: number
}
