import React, { Component } from 'react';
import TopHeader from './HeaderComponent/HeaderComponent';
import DashBoard from './dashBoard/dashBoard';
import {Row, Col } from 'reactstrap';
import Main from '../Main/Main';
import './Administration.css';


class Administration extends Component {

  render() {
  const colstyle ={padding: '0 0 0 0',margin:'0 0 0 0', height: 'auto'};
    return (
      <div className='Administration'>
        <Row style={colstyle}>
          <Col style={colstyle}>
          <TopHeader />
          </Col>
        </Row>
        <Row style={colstyle}>
          <Col style={colstyle} lg="2">
            <DashBoard />
          </Col>
        {/*<h1>HHH</h1>*/}
          <Col className='hhh' lg="9">
            <Main className="Main"  activeLink={this.props.match.url}/>
          </Col>
        </Row>   
      </div>
    );
  }
}

export default Administration;
