import React, {useEffect, useState} from "react";
import {User} from "../../Domain/entities/User";
import useBoardViewModel from "../view-models/useBoardViewModel";
import {useNavigate} from "react-router-dom";
import {ROUTE_CONSTANTS} from "../data/RouteConstants";

type FormValues = { [key: string]: string };
type FormErrors = { [key: string]: string }

const useForm = (
   initialValues: FormValues,
   validate: (values: FormValues) => FormErrors,
   users: User[],
   setUsers: any,
   id: any
) => {
   const [values, setValues] = useState<FormValues>(initialValues);
   const [errors, setErrors] = useState<FormErrors>({});

   const navigate = useNavigate();
   const {setAlert, user, updateUser} = useBoardViewModel();

   useEffect(() => {
      if (id) {
         setValues({
            name: user?.name || '',
            email: user?.email || '',
            rol: user?.rol || '',
         })
      } else {
         setValues({
            name: '',
            email: '',
            rol: '',
            status: 'active'
         })
      }
   }, [initialValues, id, user]);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const {name, value} = e.target;
      setValues((prev) => ({
         ...prev,
         [name]: value
      }))

      const validationError = validate({...values, [name]: value});
      setErrors(validationError);
   }

   const resetForm = () => {
      setValues(initialValues);
   }

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const validateErrors = validate(values);
      setErrors(validateErrors);

      if (id) {
         if (Object.keys(validateErrors).length === 0) {
            updateUser({index: id, values: values})
            setAlert({
               isActiveAlert: true,
               messageAlert: 'User update successfully'
            })

            setTimeout(() => {
               navigate(ROUTE_CONSTANTS.USERS);
            }, 1000)
         }
      } else {

         if (Object.keys(validateErrors).length === 0) {
            setUsers([...users, values]);
            setAlert({
               isActiveAlert: true,
               messageAlert: 'User create successfully'
            })
            resetForm();
            setTimeout(() => {
               navigate(ROUTE_CONSTANTS.USERS);
            }, 1000)
         }
      }

   }

   return {
      errors,
      values,
      handleChange,
      resetForm,
      handleSubmit,
   }
}
export default useForm;
