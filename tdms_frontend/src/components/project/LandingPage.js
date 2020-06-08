import React, {Component} from 'react';
import '../../Login.css';
import LandingPageHeader from './../layout/LandingPageHeader';
import SideNavBar from '../layout/SideNavBar';

class LandingPage extends Component {
    render(){
        return(
            
          <div className="global-container">
           <LandingPageHeader/>
            </div>
        )
    }
}

export default LandingPage;