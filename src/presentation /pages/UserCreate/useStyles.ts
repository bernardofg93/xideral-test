const useStyles = () => {
   const classesUseStyles = {
      form: {
         display: 'flex',
         flexDirection: 'column',
         width: '500px',
         boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.5)',
         padding: 2,
         borderRadius: 2
      },
      boxInput: {
         width: '100%',
         mt: 2
      },
      input: {
         width: '100%'
      },
      button: {
         backgroundColor: 'primary.dark',
         color: '#fff',
         width: '100%',
         padding: 2
      }
   }
   return {classesUseStyles};
}
export default useStyles;
