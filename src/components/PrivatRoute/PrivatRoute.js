import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const autha = {
  isAuthenticated: true
}

const PrivateRoute = ({component: Component, ...rest}) => {

  return (
    <Route 
     {...rest}
     render = { props =>
         autha.isAuthenticated === true ? (
	          <Component {...props} />
	       	) : (
             <Redirect to="/login" />
	       	)
       }
       />
  )
};

export default PrivateRoute;