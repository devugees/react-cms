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
    this.toggle = this.toggle.bind(this);
    this.toggleoneis = this.toggleoneis.bind(this);
    this.state = {
      contentTypes: [],
      isOpen: false,
      isOpenOne: false
    };
  }

  toggle() {
      console.log('one')
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  toggleoneis() {
      console.log('two')
    this.setState({

      isOpenOne: !this.state.isOpenOne,
    });
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
          <Col style={colstyle} >
            <TopHeader isOpen={this.state.isOpen} toggle={this.toggle} history={this.props.history}/>
        
          </Col>
        </Row>
        <Row style={colstyle} >
          <Col md="2" style={colstyle} >
            <DashBoard isOpenOne={this.state.isOpenOne} toggleoneis={this.toggleoneis} contenttypes={this.state.contentTypes} />
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
