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
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Avatar from "@material-ui/core/Avatar";

import { FONTS, icons, COLORS, images, dummyData } from '../../constants'
import {useStyles} from '../Header/HeaderStyle'

const Profile = () => {
const classes = useStyles

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
          <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        startIcon={<Avatar src={images.avatar} className={classes.navAvatar}></Avatar>}
      >
      
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
          {dummyData.dropDownData.map((item, index) => {
              return(
<MenuItem key={index} component={ListItem} onClick={handleClose}>
<ListItem>
<ListItemIcon>{item.icon}</ListItemIcon>
<ListItemText>{item.label}</ListItemText>
</ListItem>
</MenuItem>

              )
          })}
      </Menu>
          </Box>
    )
}


export default Profile