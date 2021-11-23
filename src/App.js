import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import './App.css';
import Header from './components/Header/Header';


function App() {

  return (
    <div >
    <CssBaseline />
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
}


export default (App);
