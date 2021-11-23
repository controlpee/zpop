import React, {useState} from 'react'
import { Drawer, Hidden } from '@material-ui/core';
import SidenavData from './SidenavData';
import { useStyles } from './HeaderStyle';



const Sidenav = ({ mobileOpen, handleDrawerOpen, handleDrawerClose }) => {
const classes = useStyles()


    return(
<nav className={classes.drawer} arial-label="mailbox folders">
<Hidden mdUp>
<Drawer
classes={{
  paper:  classes.drawerPaper
}
}
variant="temporary"
anchor={"left"}
open={mobileOpen}
onClose={handleDrawerClose}
ModalProps={{
    keepMounted: true
}}
>
<SidenavData handleDrawerClose={handleDrawerClose} />
</Drawer>
</Hidden>
<Hidden xsDown>
<Drawer
classes={{
    paper: classes.drawer
}}
variant="permanent"
open
>
</Drawer>
</Hidden>
<Hidden smDown>
<Drawer
classes={{
    paper: classes.drawerPaper
}}
variant="permanent"
open
>
<SidenavData />
</Drawer>
</Hidden>
</nav>    )
}


export default Sidenav;