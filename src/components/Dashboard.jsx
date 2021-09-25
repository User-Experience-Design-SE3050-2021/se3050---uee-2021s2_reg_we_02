import React, {Component} from 'react';
import SideNavBar from './SideNavBar';
class Dashboard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-2">
                    <SideNavBar/>
                </div>
                <div className={"col-sm-10"}>
                    <h1>hello world</h1>
                </div>
            </div>
        );
    }
}

export default Dashboard;