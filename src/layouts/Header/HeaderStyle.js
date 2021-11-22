import makeStyles from "@material-ui/core/styles/makeStyles"
import { COLORS } from "../../constants"


export const useStyles = makeStyles((theme)=> {
    return{
      toolbar: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
        backgroundColor: COLORS.primary
      },
      
      logo: {
            color: COLORS.white,
            fontSize: 'bold',
            textDecoration: 'none',
        },
        
        navList: {
            minWidth: '250px',
            maxWidth: '300px'
        },
        navAvatar: {
            width: '35px',
            height: '35px'
        },
        ulAvatar: {
            backgroundColor: COLORS.blue,
            color: COLORS.white
        },
        // Sidenav
    drawerPaper: {
        width: '250px',
        marginTop: '65px',
        maxWidth: '600px'
    },
    drawer: {
        display: 'flex',
        
    }
    }
    
})