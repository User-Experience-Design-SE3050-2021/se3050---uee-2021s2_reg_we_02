import React, {Component} from 'react';
import SideNavBar from './SideNavBar';
import user from '../images/user.jpg'
import service from '../services/OnlineTicketingSystemService';

class ManageTimeTable extends Component {
   constructor(props) {
       super(props);
       this.state ={
           vehicles : [],
       }
   }
   componentDidMount() {
       service.ViewAllVehicles().then((res)=>{
           this.setState({vehicles: res.data});
           console.log(this.state.vehicles);
       })
   }

    render() {
        return (
            <div className="row">
                <div className="col-sm-2">
                    <SideNavBar/>
                </div>
                <div className={"col-sm-10 p-2"}>
                    {/*first row*/}
                    <div className="row">
                        <div className="col-sm-6">
                            <h2>Manage Time Table</h2>
                            <small>Welcome back, Andrew</small>
                        </div>
                        <div className="col-sm-6">

                            <div className={"row"}>
                                <div className={"headerDetails col-sm-6"}>
                                    <button className={"btn btn-success"}><i className="fas fa-plus"></i> &nbsp;Add Uint</button>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* second row*/}
                <div className={"row"}>
                    <table className={"table"}>
                        <thead>
                        <tr>
                            <th scope="col">Bus No</th>
                            <th scope="col">Route No</th>
                            <th scope="col">Arrival</th>
                            <th scope="col">Depature</th>
                            <th scope="col">
                                Arrival Time
                                <br/>
                                (PM)
                            </th>
                            <th scope="col">
                                Depature Time
                                <br/>
                                (AM)
                            </th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.vehicles.map(
                                vehicle =>
                                    <tr key = {vehicle._id}>
                                        <td>{vehicle.vehicleRegNumber}</td>
                                        <td>{vehicle.route.routeId}</td>
                                        <td>{vehicle.route.startLocation}</td>
                                        <td>{vehicle.route.endLocation}</td>
                                        <td>{vehicle.timeTable.araivalTime}</td>
                                        <td>{vehicle.timeTable.depatureTime}</td>
                                        <td>
                                            <button type="button" className="btn btn-primary">Manage</button></td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        );
    }
}

export default ManageTimeTable;