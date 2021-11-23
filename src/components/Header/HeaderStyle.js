import { blueGrey } from "@material-ui/core/colors"
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
        [theme.breakpoints.down("sm")]: {
            marginTop: '0px'
        }
    },
    // drawer: {
    //     display: 'flex',
    // },

    // Wrapper
    wrapper: {
        height: '100vh',
        background: COLORS.lightGray1,
        padding: theme.spacing(2, 2, 0, 34),
        [theme.breakpoints.down("sm")] : {
        padding: theme.spacing(2, 2)
        }
    },
    navlinks: {
        color: blueGrey["A400"],
        "& :hover, & :hover div": {
            color: COLORS.blue
        },
        " & div ":{
        color: blueGrey["A400"],
        }
    },
    activeNavlinks: {
        color: COLORS.blue,
        "& div" : {
        color:  blueGrey["A400"]
        },
    navButton: {
        width: '100%',
        textTransform: 'capitalize',
    }
    }
    }
    
})