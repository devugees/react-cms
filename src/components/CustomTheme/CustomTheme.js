import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import RowTheme from './RowTheme';
import './CustomTheme.css';

 class CustomTheme extends Component { 

        state = {
            items:[]
        }

        addRow = () => {
            this.setState( prevState => {return {
                items: [...prevState.items, {
                    theme: {
                        logo: prevState.logo,
                        siteTitle:prevState.siteTitle,
                        siteTagline: prevState.siteTagline
                }}],
              }})
            this.setState({
                logo: '',
                siteTitle:'',
                siteTagline: ''
            })
        }

        

        changeState = name => event => {
            this.setState({
              [name]: event.target.value,
            });
          };

    render() {

        return(
            <Container className="CustomTheme">
                <Form>
                    <Row className="firstRow">
                        <Col>
                            <FormGroup>
                                <Label for="exampleEmail">Logo</Label>
                                <Input onChange={this.changeState('logo')}/>    
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="exampleEmail">Site Title</Label>
                                <Input onChange={this.changeState('siteTitle')}/> 
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="exampleEmail">Site Tagline</Label>
                                <Input onChange={this.changeState('siteTagline')}/> 
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        {this.state.items.map(row => <RowTheme theme={row.theme}/>)}
                    </Row>
                    <Row>
                        <Col>
                            <Button className="addRow" onClick={this.addRow}>Add Row</Button>{' '}
                            <Button className="removeRow" onClick={this.removeRow}>Remove Row</Button>{' '}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button className="saveBtn">Save</Button>{' '}
                        </Col>
                    </Row>
                </Form>
                
            </Container>
        )
    }
};

export default CustomTheme;