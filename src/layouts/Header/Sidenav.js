import React, {useState} from 'react'
import { Drawer, Hidden } from '@material-ui/core';
import SidenavData from './SidenavData';
import { useStyles } from './HeaderStyle';



const Sidenav = () => {
const classes = useStyles()
const [mobileOpen, setMobileOpen] = useState(false)

const handleDrawerOpen = () => {
    setMobileOpen(!mobileOpen);
}

    return(
<nav className={classes.drawer} arial-label="mailbox folders">
<Hidden smUp>
<Drawer
classes={{
  paper:  classes.drawerPaper
}
}
variant="temporary"
onClose={handleDrawerOpen}
anchor={"left"}
open={mobileOpen}
ModalProps={{
    keepMounted: true
}}
>
<SidenavData />
</Drawer>
</Hidden>
<Hidden xsDown>
<Drawer
classes={{
    paper: classes.drawerPaper
}}
variant="permanent"
open={mobileOpen}
>

</Drawer>
</Hidden>
<Hidden xsDown>
<Drawer
classes={{
    paper: classes.drawerPaper
}}
variant="permanent"
open={mobileOpen}
>
<SidenavData />
</Drawer>
</Hidden>
</nav>    )
}


export default Sidenav;