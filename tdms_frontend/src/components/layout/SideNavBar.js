import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class SideNavBar extends Component {
    render() {
        return (
       
        <div className="col-md-3 col-lg-2 sidebar-offcanvas bg-light pl-0" id="sidebar" role="navigation">
            <ul className="nav flex-column sticky-top pl-0 pt-5 mt-3">
                <li className="nav-item"><Link className="nav-link" to="#">Document</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/trainees">Trainee</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/trainers">Trainer</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/changeRole">Change Role</Link></li>
            </ul>
        </div>

        )
    }
}
export default SideNavBar;
