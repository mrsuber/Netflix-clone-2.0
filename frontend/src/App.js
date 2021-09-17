import './app.scss'
import Home from './pages/home/Home'
import Watch from './pages/watch/Watch'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import PrivateRoute from './routing/PrivateRoute'
import PrivateScreen from './components/screens/PrivateScreen'
import { BrowserRouter as Router, Switch, Route}from "react-router-dom"
import LoginScreen from "./components/screens/LoginScreen"
import RegisterScreen from "./components/screens/RegisterScreen"
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen"
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen"

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
    </Router>
  );
}

export default App;
