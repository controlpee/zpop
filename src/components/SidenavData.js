import React from 'react'
import {NavLink} from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import { ListItemText, ListItemIcon, IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';


import { dummyData} from '../constants';
import { useStyles } from './Header/HeaderStyle';

const SidenavData = ({ handleDrawerClose }) => {

const classes = useStyles()
    return(
<List>
{dummyData.listItemData.map((item, index) => {
    return(
<Button size="small" className={classes.navButton} onClick={() => handleDrawerClose()}>
<ListItem exact key={index} component={NavLink} 
className={classes.navlinks} activeClass={classes.activenavlinks} to ={item.link}>
<ListItemIcon>{item.icon}</ListItemIcon>
    <ListItemText>{item.label}</ListItemText>
</ListItem>
</Button>
    )
})}

</List>
    )
}





export default (SidenavData);