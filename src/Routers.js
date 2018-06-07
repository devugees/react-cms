import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import Administration from "./components/Administration/Administration";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import CustomeCode from "./components/Appearance/CustomeCode/CustomeCode";
import AddEntrie from "./components/ContentTypesPanel/AddEntrie/AddEntrie";
//import Structure from './components/ContentTypesPanel/Structure/Structure';
import LandingPage from "./components/LandingPage/LandingPage";
import PrivatRoute from "./components/PrivatRoute/PrivatRoute";
import jwtDecode from "jwt-decode";
import FileUploader from "./components/FileUploader/FileUploader";
import Slider from "./components/Slider/Slider";

class Routers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (localStorage.getItem("token")) {
      const tokenStr = jwtDecode(localStorage.getItem("token"));
      console.log(tokenStr);
      if (tokenStr) {
        return { authenticated: true };
      } else {
        return { authenticated: false };
      }
    }
    return null;
  }
  /*
 componentWillMount = () => {
    this.handToken()
    }
 tokenDecoded={this.handToken.bind(this)}

    handToken(decoded) {
      console.log({decoded.iat});
      if(decoded) {
        this.setState({authenticated: true})
      }
    }
    */

  handleLoginSucess(loginData) {
    this.setState({ authenticated: loginData.isAuthenticated });
    this.props.history.push("/Administration");
  }

  render() {
    const login = () => (
      <Login
        history={this.props.history}
        handleLoginSuccess={this.handleLoginSucess.bind(this)}
      />
    );

    console.log(this.state.authenticated);
    return (
      <Switch>
        <Route exact path="/login" component={login} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/FileUploader" component={FileUploader} />
        <Route exact path="/slider" component={Slider} />

        <PrivatRoute
          authenticated={this.state.authenticated}
          exact
          path="/Administration/"
          component={Administration}
        />

        <PrivatRoute
          authenticated={this.state.authenticated}
          path="/AddEntrie"
          component={AddEntrie}
        />

        <PrivatRoute
          authenticated={this.state.authenticated}
          exact
          path="/CustomeCode/"
          component={CustomeCode}
        />

        <PrivatRoute
          authenticated={this.state.authenticated}
          path="/Administration/main/:activeLink"
          component={Administration}
        />

        <PrivatRoute
          authenticated={this.state.authenticated}
          path="/Administration/Structure/:id"
          component={Administration}
        />

        <PrivatRoute
          authenticated={this.state.authenticated}
          path="/Administration/ContentType/:id"
          component={Administration}
        />

        <PrivatRoute
          authenticated={this.state.authenticated}
          path="/Administration/Categories/:id"
          component={Administration}
        />

        <PrivatRoute
          authenticated={this.state.authenticated}
          path="/Administration/view/:id"
          component={Administration}
        />
      </Switch>
    );
  }
}

export default withRouter(Routers);
