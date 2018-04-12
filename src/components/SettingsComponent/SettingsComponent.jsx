import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';
import { Badge } from 'reactstrap';
import './SettingsComponent.css';


export default class Example extends React.Component {
 
    render() {
        return (
                  
          <Form className = 'SettingsForm'>
          <h1><Badge color="">General</Badge></h1>
            <FormGroup sm={12} row>
              <Label for="exambleTitle" sm={2}>Site Title</Label>
              <Col sm={10}>
                <Input type="Title" name="title" id="exampleTitle" placeholder="Title" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleDescription" sm={2}>Description</Label>
              <Col sm={10}>
                <Input type="description" name="description" id="description" placeholder="Descripe" />
              </Col>
            </FormGroup>
            <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </Col>
           </FormGroup>
            
           <FormGroup row>
              <Label for="exambleUrl" sm={2}>Admin Log Link</Label>
              <Col sm={10}>
                <Input type="URL" name="URL" id="exampleUrl" placeholder="URL" />
              </Col>
            </FormGroup>

  <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Allow Registration
          </Label>
          
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Allow comments
          </Label>
          
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
           24 Hour Time
          </Label>
          
        </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 2 }}>
                <Button>Submit</Button>
              </Col>
            </FormGroup>
            <h1><Badge color="">Tools</Badge></h1>
            <Button color="primary" size="lg">Import</Button>{' '}
            <Button color="secondary" size="lg">Export</Button>
            <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Back up
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="exampleDate">Date</Label>
          <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
        </FormGroup>

           
        </Form>
        
          
        );
      }
    }

    
