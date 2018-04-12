import React, { Component } from 'react';
import { Container, Row, Col, Label, Input, Form, FormGroup, Button, FormText} from 'reactstrap';

class ContentSetting extends Component {
  render() {
    return (
      <div className='ContentSetting'>
      <Container>
        <Form>
          <FormGroup>
            <Row>
              <Col sm="3" md="3" lg="3">
                <Label>Title</Label>
                <Input type="text"/>
              </Col>
              <Col sm="3" md="3" lg="3">
                <Label>Machine-Name*</Label>
                <Input type="text"/>
              </Col>
              <Col sm="6" md="6" lg="6">
                <Label>URL*</Label>
                <Input type="text"/>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
               <Col sm="6" md="6" lg="6">
                <Label>Descripton</Label>
                <Input type="textarea" name="text"/>
              </Col>
              <Col sm="6" md="6" lg="6">
                <Label>Submission Guidlines</Label>
                 <Input type="textarea" name="text"/>
              </Col>
            </Row>
            <FormGroup>
              <Row>
                <Col sm="1" md="1" lg="1">
                  <Button color="secondary">Save</Button>
                </Col>
                <Col sm="1" md="1" lg="1">
                  <Button color="secondary">Cancel</Button>
                </Col>
                 <FormText color="muted">
                * Required fields
                </FormText>
              </Row>
            </FormGroup>
          </FormGroup>

          </Form>
        </Container>
      </div>
    );
  }
}

export default ContentSetting;
