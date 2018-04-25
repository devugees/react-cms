import React, { Component } from 'react';
import { Container, Row, Col, Label, Input, Form, FormGroup} from 'reactstrap';
import './ContentSetting.css';
import {Button} from 'reactstrap';


class ContentSetting extends Component {

  titleRef = React.createRef();
  machineNameRef = React.createRef();
  urlRef = React.createRef();
  descriptonRef = React.createRef();
  guidlinesRef = React.createRef();



  handelSubmit  = (e) => {
    e.preventDefault();

    const contentSettingObj = {
       title: this.titleRef.current.value,
       machineName: this.machineNameRef.current.value,
       url: this.urlRef.current.value,
       descripton: this.descriptonRef.current.value,
       guidlines: this.guidlinesRef.current.value,
    }
    this.props.addContentType(contentSettingObj)
  }

  render() {
    
    return (
      <Container className='ContentSetting'>
        <Form onSubmit={this.handelSubmit}>
            <Row>
              <Col sm="3" md="3" lg="3">
                <FormGroup>
                  <Label>Title</Label>
                  <Input name="title" innerRef={this.titleRef} placeholder="title" type="text"/>
                </FormGroup>
              </Col>
              <Col sm="3" md="3" lg="3">
                <FormGroup>
                  <Label>Machine-Name*</Label>
                  <Input name="machineName" innerRef={this.machineNameRef} placeholder="machineName" type="text"/>
                </FormGroup>
              </Col>
              <Col sm="6" md="6" lg="6">
                <FormGroup>
                  <Label>URL*</Label>
                  <Input name="url" innerRef={this.urlRef} placeholder="url" type="text"/>
                </FormGroup>
              </Col>
            </Row>
            <Row>
               <Col sm="6" md="6" lg="6">
                <FormGroup>
                  <Label>Descripton</Label>
                  <Input name="descripton" innerRef={this.descriptonRef} placeholder="descripton" type="textarea" />
                </FormGroup>
              </Col>
              <Col sm="6" md="6" lg="6">
                <FormGroup>
                <Label>Submission Guidlines</Label>
                <Input name="guidlines" innerRef={this.guidlinesRef} placeholder="guidlines" type="textarea" />
                </FormGroup>
              </Col>
            </Row>
            <Input type="submit" className="btn" value="Save" />
            <Button className="btn">Cancel</Button>
          </Form>
        </Container>
    );
  }
}

export default ContentSetting;
