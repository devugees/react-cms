import React, { Component } from 'react';
import './ContentTypePanel.css';
import { Button,Container, Row, Col, Label, Input, Form, FormGroup } from 'reactstrap';
import AddEntrie from './AddEntrie/AddEntrie';
import ViewTable from '../ViewTable/ViewTable'
import axios from 'axios';
 
 
  class ContentTypePanel extends Component {
 
    constructor(props) {
      super(props);
            this.state = {
              entries:[],
              entriesKeys :{}
            };
    }

    bringEntries =(nextProps) => {
      
      let entries = [];
      let contentObj;
      let entriesKeys = {};            
          axios.get(`http://localhost:5000/api/entries/${nextProps.id}`)
        .then((response) => {
          console.log("response",response);
          
          response.data.map((entrie) => {
            contentObj = {...entrie.content}
            contentObj.id = entrie._id
            entries.push(contentObj)
          })
          this.setState({
            entries:entries,
            entriesKeys:entries[0]
          })
          }).catch(function(error) {
            console.log("Error: ", error);
          });
    }

    componentWillMount = () => {
      this.bringEntries(this.props)
     }

    componentWillReceiveProps =(nextProps, prevState) => {
      this.bringEntries(nextProps)
    }
 
 addEntrie = (content) => {
   let stateEntries = this.state.entries 
   stateEntries.push(content)
  this.setState({
    entries : stateEntries
  })
 }
 
  render() {
     
   
    console.log(this.state.entries)
 
         
    
    return (
      <div>

      <Container className='ContentSetting'>
          <Form onSubmit={this.handelSubmit}>
            <Row>
            <ViewTable items={this.state.entries} keys={this.state.entriesKeys}/>
            
            </Row>

            <Row>
            <AddEntrie fields={this.props.fields} contentTypeId={this.props.id} addEntrie={this.addEntrie}/>

            </Row>

            <Row>
            <Button type="submit" className="btn mt-2 btn btn-outline-success btn-md" >Save</Button>
            <Button className="btn ml-2 mt-2 btn btn-outline-secondary btn-md" >Cancel</Button>
            </Row>

          </Form>
        </Container>

      </div>
    );
  }
}
export default ContentTypePanel;