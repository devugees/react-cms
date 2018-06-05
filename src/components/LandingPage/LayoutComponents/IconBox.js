import React, { Component } from 'react';
import {
    Row,
    Col } from 'reactstrap';
import '../LandingPage.css';
import * as Icon from 'react-icons/lib/fa';




export default class IconBox extends React.Component {
    render(){

        const landingPage = {
            margin: '0',
            padding: '0'
          };

    const android = <Icon.FaAndroid size='120' className="Icon" />
    const github = <Icon.FaGithubAlt size='120' className="Icon" />
    const paw = <Icon.FaPaw size='120' className="Icon" />

    const columns = [
      {
        icon: android,
        title: "Lorem ipsum",
        text: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"
      },
      {
        icon: github,
        title: "Nam liber",
        text: "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      },
      {
        icon: paw,
        title: "Duis autem",
        text: "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
      }
    ]

      return (
        <Row style={landingPage}> 
          {columns.map(column => {
            console.log(column)
            return(
              <Col className="Box">
                {column.icon}
                <h3>{column.title}</h3>
                <p>{column.text}</p>
               </Col>  
            )
          })}      
        </Row>  
      );
    }
}