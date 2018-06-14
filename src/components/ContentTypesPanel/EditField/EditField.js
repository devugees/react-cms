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
//import axios from 'axios';

class EditField extends Component {



  fieldLabelRef = React.createRef();
  typeOptRef = React.createRef();
  typeRef = React.createRef();
  uniqueRef = React.createRef();
  visibleRef = React.createRef();
  requiredRef = React.createRef();
  cssClassNameRef = React.createRef();
  customCsslRef = React.createRef();

  static propTypes = {
    addFields: PropTypes.array,
    id: PropTypes.string
  };

  handelClick = e => {
    e.preventDefault();
    const field = {
      fieldLabel: this.fieldLabelRef.current.value,
      machineName: this.fieldLabelRef.current.value
        .toLowerCase()
        .replace(/\s/g, ''),
      type: this.typeRef.current.value,
      typeOption: this.typeOptRef.current.value,
      unique: this.uniqueRef.current.checked,
      visible: this.visibleRef.current.checked,
      required: this.requiredRef.current.checked,
      cssClasses: this.cssClassNameRef.current.value,
      customCss: this.customCsslRef.current.value
    };
    console.log(field);
    this.props.editFields(field,this.props.itemWillBeEdited.index);
    this.props.toggle();
  };

  render() {
    const fieldData = this.props.itemWillBeEdited.item

    return (
      <div className="addfield">
        <h4 className="header">Add Your Content Fields</h4>
        <Container className="EditField">
          <Form onSubmit={this.handelSubmit}>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="exampleEmail">Field Label</Label>
                  <Input defaultValue={fieldData.fieldLabel} name="fieldLabel" innerRef={this.fieldLabelRef} />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="exampleSelect">Type</Label>
                  <Input
                    name="type"
                    type="select"
                    id="exampleSelect"
                    defaultValue={fieldData.type}
                    innerRef={this.typeRef}>
                    <option>Button</option>
                    <option>Checkbox</option>
                    <option>Color</option>
                    <option>Date</option>
                    <option>Datetime-local</option>
                    <option>Email</option>
                    <option>File</option>
                    <option>Hidden</option>
                    <option>Image</option>
                    <option>Month</option>
                    <option>Number</option>
                    <option>Password</option>
                    <option>Radio</option>
                    <option>Range</option>
                    <option>Reset</option>
                    <option>Search</option>
                    <option>Telephone</option>
                    <option>Text</option>
                    <option>Time</option>
                    <option>Url</option>
                    <option>Week</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="exampleText">Type-Option</Label>
                  <Input
                    name="typeOption"
                    type="textarea"
                    id="exampleText"
                    defaultValue={fieldData.typeOption}
                    innerRef={this.typeOptRef}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="exampleText">CSS-ClassName</Label>
                  <Input
                    name="cssClassName"
                    type="textarea"
                    id="exampleText"
                    defaultValue={fieldData.cssClasses}
                    innerRef={this.cssClassNameRef}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="exampleText">Custom CSS</Label>
                  <Input
                    name="customCss"
                    type="textarea"
                    id="exampleText"
                    defaultValue={fieldData.customCss}
                    innerRef={this.customCsslRef}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className="d-inline-flex text-center float-right w-50">
              <Col>
                <FormGroup check inline>
                  <Label check>
                    <Input
                      name="required"
                      type="checkbox"
                      defaultChecked={fieldData.required}
                      innerRef={this.requiredRef}
                    />{' '}
                    Required
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup check inline>
                  <Label check>
                    <Input
                      name="unique"
                      defaultChecked={fieldData.unique}
                      type="checkbox"
                      innerRef={this.uniqueRef}
                    />{' '}
                    Unique
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup check inline>
                  <Label check>
                    <Input
                      name="visible"
                      defaultChecked={fieldData.visible}
                      type="checkbox"
                      innerRef={this.visibleRef}
                    />{' '}
                    Visible
                  </Label>
                </FormGroup>
              </Col>
              <Button
                onClick={this.handelClick}
                className="btn btn-md btn-outline-primary mr-3">
                Save
              </Button>
            </Row>
          </Form>
        </Container>
      </div>
    );
  }
}

export default EditField;
