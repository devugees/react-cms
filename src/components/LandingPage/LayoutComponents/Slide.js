import React from 'react';
import {
    Container,
    Jumbotron,
    Input,
    Form } from 'reactstrap';
import '../LandingPage.css';
import kinoImage from '../image/kino.jpg';

export default class Slide extends React.Component {
    

    constructor(props) {
    super(props);

    this.state = {
        background: kinoImage,
        title: 'Welcome to the LandingPage',
        text: 'React CMS !',
        isSetting:false
    }

    }

    render(){

        const style={
            backgroundImage: `url(${this.state.background})`
        }

        if(!this.state.isSetting){
            return (
                <Jumbotron fluid className="Jumbotron" style={style}>
                    <Container fluid>
                        <h1 className="display-3">{this.state.title}</h1>
                        <p className="lead">{this.state.text}</p>
                    </Container>
                </Jumbotron>
                );
            }else{
                return (
                <Form>
                    <Input onChange={this.state.background} placeholder="Choose Image" />
                    <Input onChange={this.state.title} placeholder="Title" />
                    <Input onChange={this.state.text} placeholder="Text" />
                </Form>
                )
            }
    }
}