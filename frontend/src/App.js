import './app.scss'
import Home from './pages/home/Home'
import Watch from './pages/watch/Watch'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import { BrowserRouter as Router, Switch, Route}from "react-router-dom"

function App() {
  return (
    <Router>
    <Route exact path="/">
        <Register />
    </Route>
    <Route exact path="/login">
        <Login />
    </Route>
    <Route exact path="/home">
        <Home />
    </Route>
    <Route exact path="/stream">
        <Watch />
    </Route>
    </Router>
  );
}

export default App;
