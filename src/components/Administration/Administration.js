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
      contentTypes: []
    };
  }

  static propTypes = {
    activeLink: PropTypes.string
  };
  //NewHook
  componentDidMount = () => {
    axios
      .get('http://localhost:5000/api/contenttypes')
      .then(response => {
        this.setState({
          contentTypes: response.data
        });
      })
      .catch(function(error) {
        console.error('Error: ', error);
      });
  };

  render() {
    const colstyle = {padding: '0', margin: '0 0 0 0'};
    const padding = {padding: '1em', margin: 0};
    return (
      <div className="Administration">
        <Row style={colstyle}>
          <Col style={colstyle}>
            <TopHeader
              history={this.props.history}
              contentTypes={this.state.contentTypes}
            />
          </Col>
        </Row>
        <Row style={colstyle}>
          <Col md="2" style={colstyle}>
            <DashBoard contenttypes={this.state.contentTypes} />
          </Col>
          <Col className="Board" md="10" style={padding}>
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
