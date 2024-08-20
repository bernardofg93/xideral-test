import React, {useState} from "react";
import {Input} from "../../components/ui/Input";
import useStyles from "./useStyles";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import {Button} from "../../components/ui/Button";
import useForm from "../../hooks/useForm";
import useBoardController from "../../view-controllers/useBoardController";
import CustomAlert from "../../components/ui/Alert/Alert";

const validate = (values: { [key: string]: string }) => {
   let errors: { [key: string]: string } = {};

   if (!values.name.trim()) {
      errors.name = 'Name is required'
   }

   if (!values.email) {
      errors.email = 'Email is Required';
   } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
   }

   if (!values.rol) {
      errors.rol = 'Rol is Required'
   }

   return errors;
}


const UserCreate = () => {
   const [userValues, setUserValues] = useState({
      name: '',
      email: '',
      rol: '',
      status: 'active',
   });
   const {setUsers, users, id} = useBoardController();

   const { values, errors, handleChange, handleSubmit} = useForm(
      userValues, validate, users, setUsers, id
   );

   const {classesUseStyles} = useStyles();

   return (
      <Box>
         <CustomAlert
         />
         <form onSubmit={handleSubmit}>
            <Box sx={classesUseStyles.form}>
               <Box>
                  <Typography
                     fontWeight="bold"
                     fontSize={20}
                     textAlign="center"
                  >
                     { id ? 'UPDATE USER' :   'CREATE USER' }
                  </Typography>
               </Box>
               <Box sx={classesUseStyles.boxInput}>
                  <Input
                     value={values?.name}
                     name="name"
                     style={classesUseStyles.input}
                     placeholder="Name:"
                     onChange={handleChange}
                  />
                  {errors?.name &&
                     <Typography
                        color="error"
                     >
                        {errors?.name}
                     </Typography>
                  }
               </Box>
               <Box sx={classesUseStyles.boxInput}>
                  <Input
                     value={values?.email}
                     name="email"
                     style={classesUseStyles.input}
                     placeholder="Email:"
                     onChange={handleChange}
                  />
                  {errors?.email &&
                     <Typography
                        color="error"
                     >
                        {errors?.email}
                     </Typography>
                  }
               </Box>
               <Box sx={classesUseStyles.boxInput}>
                  <Input
                     value={values?.rol}
                     name="rol"
                     style={classesUseStyles.input}
                     placeholder="rol:"
                     onChange={handleChange}
                  />
                  {errors?.rol &&
                     <Typography
                        color="error"
                     >
                        {errors?.rol}
                     </Typography>
                  }
               </Box>
               <Box sx={classesUseStyles.boxInput}>
                  <Button
                     sx={classesUseStyles.button}
                     title="SAVE USER"
                     type="submit"
                  />
               </Box>
            </Box>
         </form>
      </Box>
   )
}
export default UserCreate;
