import {TextField} from "@mui/material";
import {forwardRef} from "react";

const Input = forwardRef(({
                                 placeholder,
                                 size,
                                 fullWidth,
                                 style,
                                 id,
                                 type,
                                 defaulValue,
                                 value,
                                 variant,
                                 disabled,
                                 onChange,
                                 ...props
                              }: any, ref) => {

   return (
      <TextField
         disabled={disabled}
         value={value}
         variant={variant}
         type={type}
         id={id}
         placeholder={placeholder}
         size={size}
         fullWidth={fullWidth}
         style={style}
         {...props}
         ref={ref}
         defaultValue={defaulValue}
         onChange={onChange}
      />
   )
})
export default Input;
