import './app.scss'
import Home from './pages/home/Home'
import Watch from './pages/watch/Watch'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import PrivateRoute from './routing/PrivateRoute'
import PrivateRouteAdmin from './routing/PrivateRouteAdmin'

import PrivateScreen from './components/screens/PrivateScreen'
import { BrowserRouter as Router, Switch, Route}from "react-router-dom"
import LoginScreen from "./components/screens/LoginScreen"
import RegisterScreen from "./components/screens/RegisterScreen"
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen"
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen"
import Admin from './Admin/Admin'



import AdminHome from "./Admin/pages/home/Home"
import AdminLogin from "./Admin/pages/login/Login"
import User from "./Admin/pages/user/User"
import NewUser from "./Admin/pages/newUser/NewUser"
import ProductList from "./Admin/pages/productList/ProductList"
import Product from "./Admin/pages/product/Product"
import NewProduct from "./Admin/pages/newProduct/NewProduct"
import UserList from "./Admin/pages/userList/UserList"

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
    <PrivateRoute exact path="/" component={Home}/>
    <PrivateRoute exact path="/movies" component={Home } type="movie"/>
    <PrivateRoute exact path="/series" component={Home } type="series"/>
    <PrivateRoute exact path="/watch" component={Watch }/>


    <Route exact path="/login" component={Login}/>
    <Route exact path="/register" component={Register}/>
    <Route exact path="/forgotpassword" component={ForgotPasswordScreen}/>
    <Route exact path="/passwordreset/:resetToken" component={ResetPasswordScreen}/>



    </Switch>
    </div>



    <Switch>
    <Route exact path="/admin/login"> <AdminLogin /></Route>
    <PrivateRouteAdmin exact path="/admin" component={AdminHome }/>
    <PrivateRouteAdmin exact path="/users" component={UserList }/>
    <PrivateRouteAdmin exact path="/user/:userId" component={User }/>
    <PrivateRouteAdmin exact path="/newUser" component={NewUser }/>
    <PrivateRouteAdmin exact path="/products" component={ProductList }/>
    <PrivateRouteAdmin exact path="/product/:productId" component={Product }/>
    <PrivateRouteAdmin exact path="/newproduct" component={NewProduct }/>



    </Switch>

    </Router>
  );
}

export default App;
