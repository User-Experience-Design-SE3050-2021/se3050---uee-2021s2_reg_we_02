import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './App.css';
import SideNavBar from "./components/SideNavBar";
import Dashboard from "./components/Dashboard";
import ManageTimeTable from "./components/ManageTimeTable";

function App() {
  return (
      <Router>

        <Switch>
          <Route path="/" exact component={Dashboard} />
            <Route path="/manageTimeTable" exact component={ManageTimeTable} />
        </Switch>
      </Router>

  );
}

export default App;
