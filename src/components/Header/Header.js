import React, {useState} from 'react'
import {Routes, Route, Link } from 'react-router-dom'
import Navbar from '../Navbar';
import Sidenav from '../Sidenav';
import Box from '@material-ui/core/Box'

import Dashboard from '../../layouts/Dashboard';
import Settings from '../../layouts/Settings'
import Sell from '../../layouts/Sell';
import SalesLedger from '../../layouts/SalesLedger';
import Reporting from '../../layouts/Reporting'
import Products from '../../layouts/Products';
import Logout from '../../layouts/Logout';
import Ecommerce from '../../layouts/Ecommerce'
import Customers from '../../layouts/Customers'
import {useStyles }from './HeaderStyle'

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    
    const handleDrawerOpen = () => {
        setMobileOpen(!mobileOpen);
    }

    const handleDrawerClose = () => {
        setMobileOpen(false);
    }
const classes = useStyles();
    return(
        <div>
            {/* Register Routes */}            
           <Navbar handleDrawerOpen={handleDrawerOpen}/>
            <Sidenav mobileOpen={mobileOpen} 
            handleDrawerOpen={handleDrawerOpen} 
            handleDrawerClose={handleDrawerClose} />
            <Box className={classes.wrapper}>
            <Routes>
                {/* <Route exact path='/' render={(props) => <Dashboard />} /> */}
                <Route exact path='/sell' render={(props) => <Sell/>} />
                <Route exact path='/customers' render={(props) => <Customers />} />
                <Route exact path='/ecommerce' render={(props) => <Ecommerce />} />
                <Route exact path='/logout' render={(props) => <Logout />} />
                <Route exact path='/reporting' render={(props) => <Reporting />} />
                <Route exact path= '/sales-ledger' render={(props) => <SalesLedger />} />
                <Route exact path='/settings' render={(props) => <Settings/>} />
                <Route exact path='/products' render={(props) => <Products />} />
            </Routes>

            </Box>
           
        </div>
    )
}




export default Header