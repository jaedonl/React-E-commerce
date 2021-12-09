import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'
import UserList from "./pages/userList/UserList"
import User from "./pages/user/User"
import NewUser from './pages/newUser/NewUser';

function App() {
  return (
    <Router>
      <div>
        <Topbar/>
        <div className="appContainer">
          <Sidebar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={UserList} />
            <Route path="/users/newuser" component={NewUser} />      
            <Route path="/users/:userId" component={User} />                
          </Switch>          
        </div>
      </div>
    </Router>
  );
}

export default App;
