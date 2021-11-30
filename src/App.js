import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './layouts/Header/Header';
import {useStyles} from './layouts/Header/HeaderStyle'
import Dashboard from './components/Dashboard';
import Sell from './components/Sell';
import Customers from './components/Customers';
import Ecommerce from './components/Ecommerce';
import Reporting from './components/Reporting';
import SalesLedger from './components/SalesLedger';
import Products from './components/Products';
import Settings from './components/Settings'

import Box from '@material-ui/core/Box';

function App() {

  const classes = useStyles()

  return (
    <main>
      <BrowserRouter>
      <Header />
      
      </BrowserRouter>
    </main>

  );
}


export default (App);
