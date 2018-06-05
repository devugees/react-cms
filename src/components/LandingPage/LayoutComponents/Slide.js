import React, { Component } from 'react';
import {
    Container,
    Jumbotron, } from 'reactstrap';
import '../LandingPage.css';




export default class Slide extends React.Component {
    render(){
      return (
        <Jumbotron fluid className="Jumbotron">
            <Container fluid>
                <h1 className="display-3">Welcome to the LandingPage</h1>
                <p className="lead">React CMS !</p>
            </Container>
        </Jumbotron>
      );
    }
}