import React, { Component } from 'react';
import {
    Row,
    Col, } from 'reactstrap';
import '../LandingPage.css';
import Image from '../image/tool.jpg';



export default class Slide extends React.Component {

    render(){

        const postBox = {
            margin: '0', 
            padding: '0',
            marginTop: '1em'
          };

          const  hrBorder = {
            margin: '0em 25em',
            borderColor: 'grey',
            marginTop: '2em'
          }

      return (
        <div>
            <Row style={postBox} className="text-center">
                <Col sm="8">
                    <h3>Duis autem</h3>
                    <p>Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                </Col>
                <Col sm="4">
                    <img src={Image} />
                </Col>
            </Row>

        <hr style={hrBorder} />
            <Row style={postBox} className="text-center">
                <Col sm="4">
                    <img src={Image} />
                </Col>
                <Col sm="8">
                    <h3>Duis autem</h3>
                    <p>Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                </Col>
            </Row>
        </div>
      );
    }
}