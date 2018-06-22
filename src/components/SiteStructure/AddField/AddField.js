import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col
} from 'reactstrap';
import './AddField.css';

//import axios from 'axios';

class AddField extends Component {

  fieldLabelRef = React.createRef();
  typeOptRef = React.createRef();
  typeRef = React.createRef();
  uniqueRef = React.createRef();
  visibleRef = React.createRef();
  requiredRef = React.createRef();
  cssClassNameRef = React.createRef();
  customCsslRef = React.createRef();
  htmlElementRef = React.createRef();

  static propTypes = {
    addFields: PropTypes.array,
    id: PropTypes.string
  };

  handelClick = e => {
    console.log(this.htmlElementRef);
    e.preventDefault();
    const field = {
      fieldLabel: this.fieldLabelRef.current.value,
      machineName: this.fieldLabelRef.current.value
        .toLowerCase()
        .replace(/\s/g, ''),
      type: this.typeRef.current.value,
      htmlElement: this.htmlElementRef.current.value,
      typeOption: this.typeOptRef.current.value,
      unique: this.uniqueRef.current.checked,
      visible: this.visibleRef.current.checked,
      required: this.requiredRef.current.checked,
      cssClasses: this.cssClassNameRef.current.value,
      customCss: this.customCsslRef.current.value
    };
    console.log(field);
    this.props.addFields(field);
  };

  render() {
    return (
      <div className="addfield">
      <Container>
        <Form>
        <h4 className="header">Add Your Content Fields</h4>
        <Container className="AddField">
          <Form onSubmit={this.handelSubmit}>
            <Row> {/*style={{display: 'inline-block'}}*/}
              <Col>
                <FormGroup>
                  <Label for="exampleEmail">Field Label</Label>
                  <Input name="fieldLabel" innerRef={this.fieldLabelRef} />
                </FormGroup>
              </Col>
              <Col sm="6" md="6" lg="6">
                <FormGroup>
                  <Label for="exampleSelect">Type</Label>
                  <Input
                    name="type"
                    type="select"
                    id="exampleSelect"
                    innerRef={this.typeRef}>
                    <option>text</option>
                    <option>textarea</option>
                    <option>email</option>
                    <option>url</option>
                    <option>image</option>
                    <option>button</option>
                    <option>checkbox</option>
                    <option>color</option>
                    <option>date</option>
                    <option>month</option>
                    <option>number</option>
                    <option>password</option>
                    <option>radio</option>
                    <option>telephone</option>
                    <option>time</option>
                    <option>week</option>
                    <option>select</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col sm="6" md="6" lg="6">
                <FormGroup>
                  <Label for="exampleSelect">Html-element</Label>
                  <Input
                    name="htmlElement"
                    type="select"
                    id="exampleSelect"
                    innerRef={this.htmlElementRef}>
                    <option>h1</option>
                    <option>h2</option>
                    <option>h3</option>
                    <option>h4</option>
                    <option>h5</option>
                    <option>h6</option>
                    <option>p</option>
                    <option>img</option>
                    <option>span</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col sm="6" md="6" lg="6">
                <FormGroup>
                  <Label for="exampleText">Type-Option</Label>
                  <Input
                    name="typeOption"
                    type="textarea"
                    id="exampleText"
                    innerRef={this.typeOptRef}
                  />
                </FormGroup>
              </Col>
              <Col sm="6" md="6" lg="6">
                <FormGroup>
                  <Label for="exampleText">CSS-ClassName</Label>
                  <Input
                    name="cssClassName"
                    type="textarea"
                    id="exampleText"
                    innerRef={this.cssClassNameRef}
                  />
                </FormGroup>
              </Col>
              <Col sm="6" md="6" lg="6">
                <FormGroup>
                  <Label for="exampleText">Custom CSS</Label>
                  <Input
                    name="customCss"
                    type="textarea"
                    id="exampleText"
                    innerRef={this.customCsslRef}
                  />
                </FormGroup>
              </Col>
            </Row>
              <Container> {/*style={{display: 'table-caption', width: '10em'}}*/}
            <Row style={{display: 'inline'}}>
              <Col>
                <FormGroup check inline>
                  <Label check>
                    <Input style={{display: 'inline-block'}} name="required" type="checkbox" innerRef={this.requiredRef}/>
                  {' '}Required
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup check inline>
                  <Label check>
                    <Input style={{display: 'inline-block'}} name="unique" type="checkbox" innerRef={this.uniqueRef}/>
                  {' '}Unique
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup check inline>
                  <Label check>
                    <Input style={{display: 'inline-block'}} name="visible" type="checkbox" innerRef={this.visibleRef}/>
                  {' '}Visible
                  </Label>
                </FormGroup>
              </Col>
            <FormGroup> {/*style={{margin: '-3em 0 0 9em'}}*/}
              <Button onClick={this.handelClick}>
                Add
              </Button>{/*className="btn btn-md btn-outline-primary mr-3"*/}
            </FormGroup>
            </Row>
              </Container>
          </Form>
        </Container>
        </Form>
        </Container>
      </div>
    );
  }
}

export default AddField;
