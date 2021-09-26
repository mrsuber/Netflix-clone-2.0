import Topbar from './components/topbar/Topbar'
import Sidbar from './components/sidebar/Sidebar'
import './admin.css'
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"

import UserList from "./pages/userList/UserList"
import { BrowserRouter as Router, Switch, Route}from "react-router-dom"
import User from "./pages/user/User"
import NewUser from "./pages/newUser/NewUser"
import ProductList from "./pages/productList/ProductList"
import Product from "./pages/product/Product"
import NewProduct from "./pages/newProduct/NewProduct"
import PrivateScreen from './privateScreen/PrivateScreen'
import PrivateRoute from './routing/PrivateRoute'

function Admin() {
  return (
    <Router>
      <Topbar/><Sidbar />
        <Switch>
        <PrivateRoute exact path="/private" component={PrivateScreen}/>
            <Route exact path="/admin/login"> <Login /></Route>
            <Route exact path="/admin"> <Home /></Route>

            <Route exact path="/users"><UserList /> </Route>
            <Route exact path="/user/:userId"> <User /></Route>
            <Route exact path="/newUser"> <NewUser /> </Route>

            <Route exact path="/products"> <ProductList /> </Route>
            <Route exact path="/product/:productId"> <Product /> </Route>
            <Route exact path="/newproduct"> <NewProduct /> </Route>

        </Switch>


    </Router>
  );
}

export default Admin;
