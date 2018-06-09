import React from 'react';
import { Row, Col, Input, Form } from 'reactstrap';
import '../LandingPage.css';
import Image from '../image/tool.jpg';
export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            title: 'Duis autem',
            text: 'Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
            isSetting:false
        }
    }
    render(){

        if(!this.state.isSetting){
        return (
            <div>
                <hr  />
                <Row className="text-center py-5">
                    <Col sm="4">
                        <img src={Image} alt="tool"/>
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
