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
import List_of_waterReading from './components/Water_reading_list';

import { Electric_beg_Bal } from './components/electric-beg-bal';
import { Testmodal } from './components/Testmodal';

import { Electric_beg_balance_list } from './components/electric-beg-balance-list';

import {Add_electric_readingData} from './components/add-electric-readingData.component'
// import { Switch } from '@material-ui/core';

// import './water-reading.css';

// import water_reading_list from './components/Water_reading_list'


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
      <Route path="/water-reading-list/" component={List_of_waterReading} />
      <Route path="/electric-beg-bal/" component={Electric_beg_Bal} />
      <Route path="/electric-beg-bal-list/" component={Electric_beg_balance_list} />
      <Route path="/electric-readingData/" component={Add_electric_readingData} />

      <Route path="/TestModal/" component={Testmodal} />

    </Router>

  );
}

export default App;
