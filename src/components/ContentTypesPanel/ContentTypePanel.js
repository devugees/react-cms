import React, { Component } from 'react';
import './ContentTypePanel.css';
import AddEntrie from './AddEntrie/AddEntrie'
import axios from 'axios';


  class ContentTypePanel extends Component {

        constructor(props) {
          super(props);
                this.state = {
                  entries:[],
                  entriesKeys:[]
                };
        }

   

entries = [];

    componentWillMount = () => {
                axios.get(`http://localhost:5000/api/entries/${this.props.id}`)
              .then((response) => {
                response.data.map((entrie) => {
                  this.entries.push(entrie.content)
                })
                
                
                 console.log(this.entries);
                }).catch(function(error) {
                  console.log("Error: ", error);
                });
     
    }



  render() {
     
   
    console.log(this.entries)

         
    
    return (
      <div>
          <h1>Hoii </h1>
          <AddEntrie fields={this.props.fields}/>
      </div>
    );
  }
}
export default ContentTypePanel;