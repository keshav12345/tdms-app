import React, { Component } from 'react'
import { getTotalUsers } from './../action/DashboardAction';
import { connect } from 'react-redux';
import PropTypes  from 'prop-types';


class Dashboard extends Component {
    componentDidMount(){
        this.props.getTotalUsers();
        
    }
    render() {
        console.log("kuch bhi "+this.props.userLoginDetails);
      
        return (
            
           <div className="col main pt-5 mt-3">
            <h1 className="display-4 d-none d-sm-block">
            Welcome to Dashboard
            </h1>
            <p className="lead d-none d-sm-block">Plus off-canvas sidebar, based on Bootstrap v4</p>
            <div className="row mb-3">
                <div className="col-xl-4  col-sm-6 py-2">
                    <div className="card bg-success text-white h-100">
                        <div className="card-body bg-success">
                            <div className="rotate">
                                <i className="fa fa-user fa-4x"></i>
                            </div>
                            <h6>Total Number of users</h6>
                            <h1 className="display-4">56</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-sm-6 py-2">
                    <div className="card text-white bg-danger h-100">
                        <div className="card-body bg-danger">
                            <div className="rotate">
                                <i className="fa fa-user fa-4x"></i>
                            </div>
                            <h6>Total number Of Active Trainees</h6>
                            <h1 className="display-4">87</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-sm-6 py-2">
                    <div className="card text-white bg-info h-100">
                        <div className="card-body bg-info">
                            <div className="rotate">
                                <i className="fa fa-user fa-4x"></i>
                            </div>
                            <h6>Total number Of Active Trainers</h6>
                            <h1 className="display-4">125</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-sm-6 py-2">
                    <div className="card text-white bg-warning h-100">
                        <div className="card-body">
                            <div className="rotate">
                                <i className="fa fa-user fa-4x"></i>
                            </div>
                            <h6>Total number Of Block Trainees</h6>
                            <h1 className="display-4">56</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-sm-6 py-2">
                    <div className="card bg-success text-white h-100">
                        <div className="card-body bg-success">
                            <div className="rotate">
                                <i className="fa fa-user fa-4x"></i>
                            </div>
                            <h6>Total Number Of Block Trainers</h6>
                            <h1 className="display-4">{this.props.totalUsers}</h1>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
Dashboard.propTypes={
    
    totalUsers:PropTypes.object.isRequired,
    getTotalUsers:PropTypes.func.isRequired,
    userLoginDetails:PropTypes.object.isRequired
    
    
}
const mapStateToProps=state=>({
   totalUsers:state.totalUsers,
   userLoginDetails:state.userLoginDetails
   
});

export default connect(
    mapStateToProps,
    {getTotalUsers}
)(Dashboard);

