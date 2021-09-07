// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


import Navbar from './components/navbar.component';
import Create_owners_info from './components/create-owners-info.component';
import EditOwnersInfo from './components/edit-ownersinfo.component';
import Ownerslist from './components/owners-info-list.component';

import WaterBegBalance from './components/water-beg-balance.component';

import Test from './components/test';
import AddNewList from './components/test.components';
import List_of_Owners from './components/onwerslist.component';
import WaterReading from './components/water-reading.component';

// import './water-reading.css';


function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={Ownerslist} />
      <Route path="/AddOwnersInfo" component={Create_owners_info} />
      <Route path="/edit/:id" component={EditOwnersInfo} />
      <Route path="/add-beg-bal/:id" component={WaterBegBalance} />
      <Route path="/list-of-owners/" component={List_of_Owners} />
      <Route path="/water-reading/" component={WaterReading} />
      <Route path="/testSample/" component={Test} />
      <Route path="/test2/" component={AddNewList} />
    </Router>

  );
}

export default App;
