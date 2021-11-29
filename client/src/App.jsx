import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const App = () => {
  const user = true
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />        
        <Route exact path="/products" component={ProductList} />
        <Route path="/products/:category" component={ProductList} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/cart" component={Cart} />

        
        <Route path="/login">
          {user ? <Redirect to="/"/> : <Login />}
        </Route>

        <Route path="/register">
          {user ? <Redirect to="/"/> : <Register />}
        </Route>
                
      </Switch>
      
      {/* <Home/> */}
      {/* <ProductList/> */}
      {/* <ProductDetail/> */} 
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Cart/> */}
    </Router>    
  );
}

export default App;
