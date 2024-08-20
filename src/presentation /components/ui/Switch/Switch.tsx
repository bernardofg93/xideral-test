import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const CustomSwitch = ({onChange, index, status}: any) => {
   return (
      <Switch
         {...label}
         onChange={(e) =>  onChange(e.target.checked, index)}
         checked={status === 'active' ? true : false}
      />
   )
}
export default CustomSwitch;

