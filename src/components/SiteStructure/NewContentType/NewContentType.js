import React, { Component } from 'react';
import './NewContentType.css';
import ContentSetting from './ContentSetting/ContentSetting';
import AddField from '../AddField/AddField';
import ViewTable from '../../ViewTable/ViewTable';
import { Button,Container, Row, Col, Label, Input, Form, FormGroup } from 'reactstrap';


class NewContentType extends Component {

  state = {
    contentSettings :{hi:"hi"},
    fields:[]
  }



  titleRef = React.createRef();
  machineNameRef = React.createRef();
  urlRef = React.createRef();
  descriptonRef = React.createRef();
  guidlinesRef = React.createRef();



  handelSubmit = (e) => {
    e.preventDefault();

    const contentSettingObj = {
       title: this.titleRef.current.value,
       machineName: this.machineNameRef.current.value,
       url: this.urlRef.current.value,
       descripton: this.descriptonRef.current.value,
       guidelines: this.guidlinesRef.current.value,
    }
    console.log("hi",contentSettingObj);
    this.setState( {contentSettings : contentSettingObj } )
    console.log(this.state);
    const finalNewContentType = {
       title: this.titleRef.current.value,
       machineName: this.machineNameRef.current.value,
       url: this.urlRef.current.value,
       descripton: this.descriptonRef.current.value,
       guidelines: this.guidlinesRef.current.value,
       fields: this.state.fields
    }
        console.log("final", finalNewContentType);

}

    addFields = (field) => {
      const fields = this.state.fields;
      fields.push(field);
      this.setState({fields:fields})
    }

  
  render() {
    return (
      <div className='AddContent'>

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
            <Row>
            <AddField addFields={this.addFields} />
            </Row>
             <Row>
            <ViewTable/>
            </Row>
            <Row>
            <Button type="submit" className="btn" >Save</Button>
            <Button className="btn">Cancel</Button>
            </Row>
          </Form>
        </Container>





      {/*
        <ContentSetting addContentType={this.addContentType}
/>*/}
      </div>
    );
  }
}

export default NewContentType;
