import React, { Component } from 'react';
import {
    Row,
    Col,
    Input,
    Form } from 'reactstrap';
import '../LandingPage.css';
import Image from '../image/tool.jpg';



export default class Post extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            image: '',
            title: 'Duis autem',
            text: 'Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
            isSetting:true
        }
    
    }

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

        if(!this.state.isSetting){
        return (
            <div>
                <hr style={hrBorder} />
                <Row style={postBox} className="text-center">
                    <Col sm="4">
                        <img src={Image} />
                    </Col>
                    <Col sm="8">
                        <h3>{this.state.title}</h3>
                        <p>{this.state.text}</p>
                    </Col>
                </Row>
            </div>
            );
        }else{
            return (
            <Form>
                <Input onChange={this.state.image} placeholder="Choose Image" />
                <Input onChange={this.state.title} placeholder="Title" />
                <Input onChange={this.state.text} placeholder="Text" />
            </Form>)
        }
    }
}