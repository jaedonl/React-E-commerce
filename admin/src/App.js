import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'
import UserList from "./pages/userList/UserList"
import User from "./pages/user/User"
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";

function App() {
  return (
    <Router>      
      <Switch>
        <Route path="/login" component={Login} />
      {/* { admin && ( */}
        <>
          <Topbar/>
          <div className="appContainer">
            <Sidebar/>
              <Route exact path="/" component={Home} />

              <Route exact path="/users" component={UserList} />
              <Route path="/users/newuser" component={NewUser} />
              <Route path="/users/:userId" component={User} />

              <Route exact path="/products" component={ProductList} />
              <Route path="/products/newproduct" component={NewProduct} />
              <Route path="/products/:productId" component={Product} />
              
          </div>
        </>
      {/* )} */}
      
      </Switch>
    </Router>
  );
}

export default App;
