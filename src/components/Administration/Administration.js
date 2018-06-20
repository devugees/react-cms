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
    this.toggleSideBar = this.toggleSideBar.bind(this);
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

  toggleSideBar() {
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
    const padding = {padding: '1em', margin: 0, height: '95vh'};
    return (
      <div className="Administration">
      <Row style={colstyle} >
          <Col style={colstyle} >
          <TopHeader contentTypes={this.state.contentTypes} isOpen={this.state.isOpen} toggleSideBar={this.toggleSideBar} toggle={this.toggle} history={this.props.history}/>
        
          </Col>
        </Row>
        <Row style={colstyle} >
          <Col md="2" style={colstyle} >
            <DashBoard isOpenOne={this.state.isOpenOne} contenttypes={this.state.contentTypes} />
          </Col>
          <Col className="Board constans" md="10" style={padding}>
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
