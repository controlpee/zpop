import React, {useState} from 'react'
import {Routes, Route, Link } from 'react-router-dom'
import Navbar from './Navbar';
import Sidenav from './Sidenav';
import Box from '@material-ui/core/Box'

import Dashboard from '../../components/Dashboard';
import Settings from '../../components/Settings'
import Sell from '../../components/Sell';
import SalesLedger from '../../components/SalesLedger';
import Reporting from '../../components/Reporting'
import Products from '../../components/Products';
import Logout from '../../components/Logout';
import Ecommerce from '../../components/Ecommerce'
import Customers from '../../components/Customers'
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
                <Route exact path='/' render={(props) => <Dashboard />} />
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