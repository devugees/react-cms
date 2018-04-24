import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import './CustomTheme.css';

 class CustomTheme extends Component { 

    render() {

        return(
            <Container className="CustomTheme">
                <Row className="firstRow">
                    <Col>
                        <FormGroup>
                            <Label for="exampleSelect">Choose Columns</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col>
                        <Button>Add Col </Button>
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default CustomTheme;