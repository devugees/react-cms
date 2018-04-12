import React, { Component } from 'react';
import { Container, Row, Col, Label, Input, Form, FormGroup, Button, FormText} from 'reactstrap';
import './ContentSetting.css';

class ContentSetting extends Component {
  render() {
    return (
      <Container className='ContentSetting'>
        <Form>
            <Row>
              <Col sm="3" md="3" lg="3">
                <FormGroup>
                  <Label>Title</Label>
                  <Input type="text"/>
                </FormGroup>
              </Col>
              <Col sm="3" md="3" lg="3">
                <FormGroup>
                  <Label>Machine-Name*</Label>
                  <Input type="text"/>
                </FormGroup>
              </Col>
              <Col sm="6" md="6" lg="6">
                <FormGroup>
                  <Label>URL*</Label>
                  <Input type="text"/>
                </FormGroup>
              </Col>
            </Row>
            <Row>
               <Col sm="6" md="6" lg="6">
                <FormGroup>
                  <Label>Descripton</Label>
                  <Input type="textarea" name="text"/>
                </FormGroup>
              </Col>
              <Col sm="6" md="6" lg="6">
                <FormGroup>
                <Label>Submission Guidlines</Label>
                <Input type="textarea" name="text"/>
                </FormGroup>
              </Col>
            </Row>
              <Col>
                <Button className="btn">Save</Button>
                <Button className="btn">Cancel</Button>
              </Col>   
          </Form>
        </Container>
    );
  }
}

export default ContentSetting;
