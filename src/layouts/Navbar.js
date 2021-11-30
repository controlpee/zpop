import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton'
import Box from '@material-ui/core/Box'
import Hidden  from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';

// Components
import Profile from './NavTabs/profile';
import Notification from './NavTabs/notification';
import Messages from './NavTabs/messages';

import { useStyles } from './Header/HeaderStyle';
import { icons, images } from '../constants';




export default function Navbar ({handleDrawerOpen}) {
const classes = useStyles();


    return(
        <AppBar position="static">
        <Toolbar className={classes.toolbar}>
        <Link to = "/" classes={classes.link}>
        <Typography className={classes.logo}>{"<ZPOP Admin/>"}</Typography>
        </Link>
        <Hidden smDown>
          <Box style={{display: 'flex'}}>
          <Messages />
          <Notification />
          <Profile />
          </Box>
          </Hidden>
          <Hidden mdUp>
          <IconButton color="inherit" onClick={() => handleDrawerOpen()}>
            <MenuIcon />
          </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    )
}