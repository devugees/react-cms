import React from 'react';
import { Button, Form, 
  FormGroup, Label, Input, 
  Container, Row, Col } from 'reactstrap';
import ToggleButton from 'react-toggle-button';
import './SettingsComponent.css';


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
                      <Label >Description</Label>
                      <Input />    
                    </FormGroup>
                    <FormGroup>
                      <Label >Email</Label>
                      <Input />    
                    </FormGroup>
                    <FormGroup>
                      <Label >Admin loglink</Label>
                      <Input />   
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup className="ToggleButton">
                      <Label>Allow Registration</Label> 
                      <ToggleButton />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup className="ToggleButton">
                      <Label>Allow Registration</Label> 
                      <ToggleButton />
                    </FormGroup>
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
                    <FormGroup>
                      <Label for="exampleDate">Date</Label>
                      <Input type="date" name="date" placeholder="date placeholder" />
                    </FormGroup>
                  </Col>
                  <Col>
                  <FormGroup>
                    <Label for="exampleSelect">Language</Label>
                    <Input type="select" name="select">
                      <option>English</option>
                      <option>German</option>
                      <option>Italian</option>
                    </Input>
                  </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h3>Tools</h3>
                  </Col> 
                  <Col>
                    <Button>Import</Button>
                    <Button>Export</Button>
                  </Col>
                  <Col>
                    <FormGroup className="ToggleButton">
                      <Label>Backup</Label> 
                      <ToggleButton />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="exampleDate">Date</Label>
                      <Input type="date" name="date" placeholder="date placeholder" />
                    </FormGroup>
                    <Button>Save</Button>
                  </Col>
                </Row>
            </Form>
          </Container>
        );
      }
    }

    
