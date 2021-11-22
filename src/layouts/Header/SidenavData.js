import React from 'react'
import {NavLink} from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import { ListItemText, ListItemIcon } from '@material-ui/core';


import { dummyData} from '../../constants';

const SidenavData = () => {


    return(
<List>
{dummyData.listItemData.map((item, index) => {
    return(
<ListItem key={index} component={NavLink} to ={item.link}>
<ListItemIcon>{item.icon}</ListItemIcon>
    <ListItemText>{item.label}</ListItemText>
</ListItem>
    )
})}

</List>
    )
}





export default (SidenavData);