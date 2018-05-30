import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({component: Component, ...rest}) => {

  return (
    <Route 
     {...rest}
     render = { props => 
         rest.authenticated === true ? (
	          <Component {...props} />
	       	) : (
             <Redirect to="/login" />
	       	)
       }
       />
  )
};

export default PrivateRoute;