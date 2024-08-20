import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';

const CustomSearch = ({onChange, value}: any) => {
   return (
      <Paper
         elevation={1}
         component="form"
         sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%' ,
            border: '2px solid ddd',
            height: '50px'
         }}
      >
         <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
         </IconButton>
         <InputBase
            onChange={(e) => onChange(e.target.value)}
            sx={{ flex: 1 }}
            placeholder="User search:"
            inputProps={{ 'aria-label': 'search google maps' }}
         />
      </Paper>
   )
}
export default CustomSearch;
