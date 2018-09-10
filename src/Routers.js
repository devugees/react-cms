import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Administration from './components/Administration/Administration';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import CustomCode from './components/Appearance/CustomCode/CustomCode';
import AddEntrie from './components/ContentTypesPanel/AddEntrie/AddEntrie';
// import Structure from './components/ContentTypesPanel/Structure/Structure';
import LandingPage from './components/LandingPage/LandingPage';
import PrivatRoute from './components/PrivatRoute/PrivatRoute';
import jwtDecode from 'jwt-decode';
import FileUploader from './components/FileUploader/FileUploader';
import Slider from './components/Slider/Slider';
import ExtandedCTView from './components/LandingPage/LayoutComponents/ExtandedCTView';


class Routers extends Component {
     constructor(props) {
        super(props);
        this.state = {
            authenticated: false
          }
        }

    static getDerivedStateFromProps(nextProps, prevState) {
    if(localStorage.getItem('token')) {
      const tokenStr = jwtDecode(localStorage.getItem('token'));
      if(tokenStr) {
          return { authenticated: true };
         } else {
           return { authenticated: false };
       }
     } 
     return null;
    }

    handleLoginSucess(loginData) {
      this.setState({authenticated: loginData.isAuthenticated});
      this.props.history.push("/Administration");
    }

  render() {

   const login = ()=> ( 
      <Login 
        history={this.props.history}
        handleLoginSuccess={this.handleLoginSucess.bind(this)} />)
  

   console.log(this.state.authenticated);
    return (

          <Switch>

            <Route  exact path="/login" component={login} />
            <Route  exact path="/registration" component={Registration} />
            <Route  exact path="/" component={LandingPage} />
            <Route  exact path="/FileUploader" component={FileUploader} />
            <Route  exact path="/slider" component={Slider} />
            <Route  path="/ContentType/entries/:entrieId" component={LandingPage} />            

        
            <PrivatRoute
              authenticated={this.state.authenticated}
              exact path="/Administration/" component={Administration} />
        
             <PrivatRoute  
                authenticated={this.state.authenticated}
                path="/AddEntrie" component={AddEntrie} />

             <PrivatRoute  
                authenticated={this.state.authenticated}
                exact path="/CustomCode/" component={CustomCode} />
            
             <PrivatRoute 
                authenticated={this.state.authenticated}
                path="/Administration/main/:activeLink" component={Administration} />
            

            
                <PrivatRoute  
                authenticated={this.state.authenticated}
                path="/Administration/Structure/:id" component={Administration} />
            

            
               <PrivatRoute 
                authenticated={this.state.authenticated}
                path="/Administration/ContentType/:id" component={Administration} />
            

           
              <PrivatRoute 
                authenticated={this.state.authenticated}
                path="/Administration/Categories/:id" component={Administration} />
           
            
              <PrivatRoute 
                authenticated={this.state.authenticated}
               path="/Administration/view/:id" component={Administration} />
           </Switch>

                
 
             
             );
     }
}

export default withRouter(Routers);
