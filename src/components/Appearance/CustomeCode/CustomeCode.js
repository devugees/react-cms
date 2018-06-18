import React, {Component} from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2';
import { Button } from 'reactstrap';
import axios from 'axios'
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

class CustomeCode extends Component {

  state = {
      data:{
        javascriptCode:"",
        cssCode:"",
    }
  }
  
  onChange = (e,editor, data, value) => {
    let stateData = {...this.state.data};
    stateData[e.target.name]= e.target.value
    this.setState({data:stateData})
  }

  onClick = () => {

    axios
      .post(`http://localhost:5000/api/customcode`,this.state.data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log('Error: ', error);
      });  

  }

  componentDidMount  ()  {
    axios
      .get(`http://localhost:5000/api/customcode`)
      .then(response => {
        console.log(response);
        let data;
        data.javascriptCode = response.data.javascriptCode,
        data.cssCode = response.data.cssCode
        this.setState({data});
      })
      .catch(error => {
        console.log('Error: ', error);
      });  
  }

  render() {
    return (
     <div>
       <h3>Java Script Code</h3>
       <CodeMirror
       defaultValue= {this.state.javascriptCode}
        name="javascriptCode"
        options={{
          mode: "javascript",
          theme: "material",
          lineNumbers: true
        }}
        onChange={this.onChange}
      />
       <h3>Css Code</h3>      
      <CodeMirror
        defaultValue= {this.state.cssCode}        
        name="cssCode"
        options={{
          mode: "javascript",
          theme: "material",
          lineNumbers: true
        }}
        onChange={this.onChange}
      />
      <Button onClick={this.onClick} color="primary">Save</Button>{' '}
     </div>
     
    );
  }
}

export default CustomeCode;
