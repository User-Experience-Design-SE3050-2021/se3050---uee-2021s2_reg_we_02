import React, {Component} from 'react';

class SideNavBar extends Component {
    render() {
        return (
            <div className="navBar">
                <center>
                    <div className="card cards">
                        <i className="fas fa-tachometer-alt icons"></i>
                        <small>Dashboard</small>
                    </div>
                    <a href="/manageTimeTable">
                        <div className="card cards">
                            <i className="fas fa-cogs icons"></i>
                            <small>Manage Time Tables</small>
                        </div>
                    </a>
                    <div className="card cards">
                        <i className="fas fa-users icons"></i>
                        <small>Manage Users</small>
                    </div>
                    <div className="card cards">
                        <i className="fas fa-money-check-alt icons"></i>
                        <small>Manage Payments</small>
                    </div>
                    <div className="card cards lastCard">
                        <i className="fas fa-sign-out-alt"></i>
                        <small>Logout</small>
                    </div>
                </center>
            </div>
        );
    }
}

export default SideNavBar;