import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import './App.css';
import Header from './layouts/Header/Header';
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
