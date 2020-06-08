import React from 'react';
import './App.css';
import LandingPage from './components/project/LandingPage';
import "bootstrap/dist/css/bootstrap.min.css";
import TraineeDashboard from './components/TraineeDashboard';
import {BrowserRouter as Router,Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import SideNavBar from './components/layout/SideNavBar';
import Dashboard from './components/Dashboard';
import Trainee from './components/Trainee/Trainee';
import Trainer from './components/Trainer/Trainer';
import ChangeRole from './components/ChangeRole/ChnageRole';
function App() {
  return (
      <Provider store={store}>
      
      <Router>
      <LandingPage/>
      <div class="container-fluid side-main" id="main">
      <div class="row row-offcanvas row-offcanvas-left">
      <SideNavBar/>
      <Route exact path="/" component={Dashboard} />  
      <Route exact path="/trainees" component={Trainee} />
      <Route exact path="/trainers" component={Trainer} />
      <Route exact path="/changeRole" component={ChangeRole} />
         
      </div>
      </div>
      <Route path="/" component={LandingPage} />
      <Route path="/traineeDashboard" component={TraineeDashboard} />
      </Router>
      </Provider>
    
  );
}

export default App;
