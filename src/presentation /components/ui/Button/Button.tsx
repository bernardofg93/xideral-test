import {Button} from "@mui/material";
import {useCallback} from "react";
import Stack from '@mui/material/Stack';

const CustomButton = ({
                         variant,
                         title,
                         onPress,
                         size,
                         style,
                         type,
                         color,
                         fullWidth,
                         sx,
                      }: any ) => {

   const onHandlePress = useCallback(() => {
      onPress();
   }, [onPress]);

   return (
      <Stack direction="row" spacing={0}>
         <Button
            sx={sx}
            variant={variant}
            onClick={onPress && onHandlePress}
            size={size}
            style={style}
            type={type}
            color={color}
            fullWidth={fullWidth}
         >
            {title}
         </Button>
      </Stack>
   )
}
export default CustomButton;
