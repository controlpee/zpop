import React, {useState} from "react";
import { IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon  from "@material-ui/core/ListItemIcon";
import MenuIcon from '@material-ui/icons/Menu'
import {makeStyles} from '@material-ui/core/styles';
import withStyles from '@material-ui/styles/withStyles';
import Badge from '@material-ui/core/Badge';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Avatar from '@material-ui/core/Avatar';

import { FONTS, icons, COLORS, images, dummyData } from '../../constants'
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import { useStyles } from "../Header/HeaderStyle";

const Notification = () => {
const classes = useStyles();

const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  
    return(
        <Box>
          <IconButton
        aria-controls="Notification"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
      <Badge badgeContent={4} color="secondary">
        <NotificationsActiveIcon />
      </Badge>
      </IconButton>
      <Menu
        id="notification"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
<List className={classes.navList}>
{dummyData.dropDownNotice.map((item, index) => {
              return(
<ListItem key={index}  onClick={handleClose}>
<ListItemIcon>
<Avatar className={classes.ulAvatar}>
{item.label[0].toUpperCase()}
</Avatar>
    </ListItemIcon>
<ListItemText primary={item.label} secondary={item.desc}>
</ListItemText>
</ListItem>
)
})}
</List>
      </Menu>
          </Box>
    )
}


export default Notification