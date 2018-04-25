import React, { Component } from 'react';
import {Row, Col } from 'reactstrap';
import TopHeader from '../../Administration/HeaderComponent/HeaderComponent';
import DashBoard from '../../Administration/dashBoard/dashBoard';


class Structure extends Component {
	render() {
   const colstyle ={padding: '0',margin:'0 0 0 0', height: 'auto'};
	    return (
	      <div className='Administration'>
	        <Row style={colstyle}>
	          <Col style={colstyle}>
	          <TopHeader />
	          </Col>
	        </Row>
	        <Row style={colstyle}>
	          <Col style={colstyle} lg="2">
	            <DashBoard  contenttypes={this.state.contentTypes} />
	          </Col>
	      
	        </Row>   
	      </div>
    );
  }
}


export default Structure;