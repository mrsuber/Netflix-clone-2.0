import {Redirect, Route} from 'react-router-dom'

const PrivateRoute = ({component:Component,type,...rest}) => {
  return (
    <Route
    {...rest}
    render={(props) =>
        localStorage.getItem("authToken")? (
          <Component {...props} type={type}/>
        ) : (
          <Redirect to="/admin/login" />
        )

    }
     />
  )
}

export default PrivateRoute
