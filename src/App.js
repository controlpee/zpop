import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import './App.css';
// import Appbar from './layouts/Main';
import Header from './layouts/Header/Header';
function App() {

  return (
    <div>
    <CssBaseline />
      <Router>
        <Header />
      <Routes>
      {/* <Route exact path='/' render={(props) => <Appbar/>} /> */}
      </Routes>
      </Router>
    </div>
  );
}


export default (App);
