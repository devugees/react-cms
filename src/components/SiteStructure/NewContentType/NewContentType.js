import React, { Component } from "react";
import "./NewContentType.css";
import AddField from "../AddField/AddField";
import ViewTable from "../../ViewTable/ViewTable";
import {
  Button,
  Container,
  Row,
  Col,
  Label,
  Input,
  Form,
  FormGroup
} from "reactstrap";
import axios from "axios";

class NewContentType extends Component {
  state = {
    contentSettings: {},
    fields: [],
    fieldsKeys:{ 
      FieldLabel:"",
      MachineName:"",
      Type:"",
      HtmlElement:"",
      TypeOption:"",
      Unique:"",
      Visible:"",
      Required:"",
      CssClasses:"",
      CustomCss:"",
     }
  };

  newContentTypeObj = {};

  handelChange = e => {
    const inputName = e.target.name;
    this.newContentTypeObj[inputName] = e.target.value;
    console.log(this.newContentTypeObj);
  };

  handelSubmit = e => {
    e.preventDefault();
    this.newContentTypeObj.fields = this.state.fields;
    console.log("final", this.newContentTypeObj);
    axios
      .post("http://localhost:5000/api/newcontenttype", this.newContentTypeObj)
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          alert("your contentType is submaited");
        } else {
          alert("there is a problem");
        }
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  };

  addFields = field => {
    console.log("it is arriving",field);
    const fields = [...this.state.fields];
    fields.push(field);
    this.setState({ fields: fields });
  };

  render() {
    const brdJumbo = {
      border: "1px solid grey",
      margin: '1em 0 1em 0',
      padding: '1em',
      transform: 'scale(1.02,1)'
    };
    const h3Brd = {
      marginTop: " -33px",
      marginLeft: "5px",
      background: "white",
      width: 'auto',
      display: 'table',
      position: 'absolute'
    };
    return (
      <div className="AddContent">
        <Container className="ContentSetting" >
          <Form onSubmit={this.handelSubmit}>
      <div className="row">
        <div className="column">
            <Row style={brdJumbo}>
          <h5 style={h3Brd} >New Content</h5>
              <Col sm="3" md="3" lg="3">
                <FormGroup>
                  <Label>Title</Label>
                  <Input
                    name="title"
                    placeholder="title"
                    type="text"
                    onChange={this.handelChange}
                  />
                </FormGroup>
              </Col>
              <Col sm="3" md="3" lg="3">
                <FormGroup>
                  <Label>Machine-Name*</Label>
                  <Input
                    name="machineName"
                    placeholder="machineName"
                    type="text"
                    onChange={this.handelChange}
                  />
                </FormGroup>
              </Col>
              <Col sm="6" md="6" lg="6">
                <FormGroup>
                  <Label>Descripton</Label>
                  <Input
                    name="descripton"
                    placeholder="descripton"
                    type="textarea"
                    onChange={this.handelChange}
                  />
                </FormGroup>
              </Col>
              <Col sm="6" md="8" lg="12">
                <FormGroup>
                  <Label>Submission Guidlines</Label>
                  <Input
                    name="guidlines"
                    placeholder="guidlines"
                    type="textarea"
                    onChange={this.handelChange}
                  />
                </FormGroup>
              </Col>
            </Row>
        </div>
      <div className="column">
            <Row>
              <AddField addFields={this.addFields} />
            </Row>
        </div>
      </div>
            <Row>
              <ViewTable
                items={this.state.fields}
                keys={this.state.fieldsKeys}
              />
            </Row>
            <Row className="float-right">
              <Button
                type="submit"
                className="btn mt-2 btn btn-outline-success btn-md"
              >
                Save
              </Button>
              <Button className="btn ml-2 mt-2 btn btn-outline-secondary btn-md">
                Cancel
              </Button>
            </Row>
          </Form>
        </Container>
{/*
<Col sm="6" md="6" lg="6">
// we emplemt
 ot when we 
 emplemnt dynamic 
 routes depending 
 on this//
<FormGroup>
<Label>URL*</Label>
<Input
name="url"
placeholder="url"
type="text"
onChange={this.handelChange}
/>
</FormGroup>
</Col>
*/}
{/*<ContentSetting addContentType={this.addContentType}/>*/}
      </div>
    );
  }
}

export default NewContentType;
