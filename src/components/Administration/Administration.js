import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TopHeader from './HeaderComponent/HeaderComponent';
import DashBoard from './dashBoard/dashBoard';
import {Row, Col} from 'reactstrap';
import Main from '../Main/Main';
import './Administration.css';
import axios from 'axios';

class Administration extends Component {
  constructor() {
    super();
    this.state = {
      contentTypes: [],
    };
  }

  static PropTypes = {
    activeLink: PropTypes.string
  };
   //NewHook
  componentDidMount = () => {
    axios
      .get('http://localhost:5000/api/contenttypes')
      .then(response => {
        this.setState({
          contentTypes: response.data,
        });
      })
      .catch(function(error) {
        console.error('Error: ', error);
      });
  };

  render() {
    const colstyle = {padding: '0', margin: '0 0 0 0', height: 'auto'};
    return (
      <div className="Administration">
        <Row style={colstyle}>
          <Col style={colstyle}>
            <TopHeader history={this.props.history}/>
        
          </Col>
        </Row>
        <Row style={colstyle}>
          <Col style={colstyle} lg="2">
            <DashBoard contenttypes={this.state.contentTypes} />
          </Col>
          {/*<h1>HHH</h1>*/}
          <Col className="hhh" lg="9">
            <Main
              contenttypes={this.state.contentTypes}
              className="Main"
              activeLink={this.props.match.url}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Administration;
