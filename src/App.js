import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import './App.css';
import Header from './layouts/Header/Header';
import Dashboard from './components/Dashboard';
import Sell from './components/Sell';
import Reporting from './components/Reporting';
import SalesLedger from './components/SalesLedger';
import Settings from './components/Settings';
import Products from './components/Products'
import Customers from './components/Customers';
import Ecommerce from './components/Ecommerce';


function App() {

  return (
    <div>
    <CssBaseline />
      <Router>
        <Header />
        
      </Router>
    </div>
  );
}


export default (App);
