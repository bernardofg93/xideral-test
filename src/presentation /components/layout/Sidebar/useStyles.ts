const useStyles = () => {
   const classesUseStyles = {
      sidebar: {
         width: 300,
         bgcolor: 'primary.main',
         height: "100vh",
         display: 'flex',
         alignItems: 'center',
         boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.5)',
         flexDirection: 'column'
      },
      logoImg: {
         width: '100%',
         height: 127
      }
   }
   return {classesUseStyles};
}
export default useStyles;
