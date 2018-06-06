import React, { Component } from 'react';
import {
    Form,
    Input,
    Row,
    Col } from 'reactstrap';
import '../LandingPage.css';
import * as Icon from 'react-icons/lib/fa';




export default class IconBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        iconTop: '',
        title: 'Lorem ipsum',
        text: 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet',
        isSetting:false
      }
  }

    render(){

      const landingPage = {
        margin: '0',
        padding: '0'
      };

      
      if(!this.state.isSetting){
        return (
          <Row style={landingPage}> 
            <Col className="Box">
              {this.state.icon}
              <h3>{this.state.title}</h3>
              <p>{this.state.text}</p>
            </Col>   
          </Row>  
        );
      } else { return( 
      <Form>
          <Input onChange={this.state.iconTop} placeholder="Choose Icon" />
          <Input onChange={this.state.title} placeholder="Title" />
          <Input onChange={this.state.text} placeholder="Text" />
        </Form>
        )
      }
      
    }
}