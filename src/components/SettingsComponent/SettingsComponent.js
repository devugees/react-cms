import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
import ToggleButton from "react-toggle-button";
import "./SettingsComponent.css";

export default class Setting extends React.Component {
  render() {
    return (
      <Container className="SettingsForm">
        <Form>
          <h3>General</h3>
          <Row>
            <Col>
              <FormGroup>
                <Label>Site Title</Label>
                <Input />
              </FormGroup>
              <FormGroup>
                <Label>Description</Label>
                <Input />
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Tools</h3>
              <Button className="settingsBotton">Import</Button>
              <Button className="settingsBotton">Export</Button>
            </Col>
            <Col>
              <FormGroup className="ToggleButton">
                <Label>Allow Registration</Label>
                <ToggleButton />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button>Save</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}
