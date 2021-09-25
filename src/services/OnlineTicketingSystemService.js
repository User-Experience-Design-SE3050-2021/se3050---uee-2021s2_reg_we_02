import axios from 'axios';
const getAllVehicles = "http://localhost:9900/vehicle/getAllVehicles";

class OnlineTicketingSystemService{
    ViewAllVehicles(){
        return axios.get(getAllVehicles);
    }
}
export default new OnlineTicketingSystemService();