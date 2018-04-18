import React, { Component } from 'react';
import TopHeader from './HeaderComponent/HeaderComponent';
import DashBoard from './dashBoard/dashBoard';
import {Row, Col } from 'reactstrap';
import Main from '../Main/Main';
import './Administration.css';


class Administration extends Component {

  render() {
  const colstyle ={padding: '0',margin:'0'};
    return (
      <div className='Administration'>
        <Row>
          <Col style={colstyle}>
          <TopHeader />
          </Col>
        </Row>
        <Row>
          <Col lg="2">
            <DashBoard />
          </Col>
          <Col lg="9">
            <Main className="Main"  activeLink={this.props.match.url}/>
          </Col>
        </Row>   
      </div>
    );
  }
}

export default Administration;
