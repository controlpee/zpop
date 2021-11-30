import React from 'react'
import {NavLink} from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import { ListItemText, ListItemIcon } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { dummyData} from '../constants';
import { useStyles } from './Header/HeaderStyle';

export default function SidenavData({ handleDrawerClose }) {

const classes = useStyles()
    return(
<List>
{dummyData.listItemData.map((item, index) => {
    return(
<Button size="small" className={classes.navButton} >
<ListItem exact key={index} component={NavLink} 
className={classes.navlinks} activeClass={classes.activeNavLinks} to ={item.link}>
<ListItemIcon>{item.icon}</ListItemIcon>
    <ListItemText>{item.label}</ListItemText>
</ListItem>
</Button>
    )
})}

</List>
    )
}





