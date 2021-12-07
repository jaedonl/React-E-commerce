import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'
import UserList from "./pages/userList/UserList"

function App() {
  return (
    <Router>
      <div>
        <Topbar/>
        <div className="appContainer">
          <Sidebar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={UserList} />            
          </Switch>          
        </div>
      </div>
    </Router>
  );
}

export default App;
