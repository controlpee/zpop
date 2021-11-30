import React, {useState} from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Navbar from '../Navbar';
import Sidenav from '../Sidenav';
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

export default function Header() {
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
            <main className={classes.wrapper}>
            <Routes>
<Route exact path='/' element={<Dashboard />} />
<Route exact path='/sell' element={ <Sell />} />
<Route exact path='/customers' element={ <Customers />} />
<Route exact path='/ecommerce' element={ <Ecommerce />} />
<Route exact path='/reporting' element={<Reporting />} />
<Route exact path= '/sales-ledger' element={<SalesLedger />} />
<Route exact path='/settings' element={<Settings/>} />
<Route exact path='/products' element={<Products />} />
                
            </Routes>
            </main>
        </div>
    )
}




