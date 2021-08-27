// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


import Navbar from './components/navbar.component';
import Create_owners_info from './components/create-owners-info.component';
import EditOwnersInfo from './components/edit-ownersinfo.component';
import Ownerslist from './components/owners-info-list.component';

function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
      <Route path="/" exact component={Ownerslist} / >
      <Route path="/AddOwnersInfo" component={Create_owners_info} / >
      <Route path="/edit/:id" component={EditOwnersInfo} / >
    </Router>
      
  );
}

export default App;
