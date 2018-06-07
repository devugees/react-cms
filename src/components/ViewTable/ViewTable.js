import React, { Component } from 'react';
import './ViewTable.css';
import { Table, Row } from "reactstrap";
import axios from 'axios';




class ViewTable extends Component {

  constructor(props) {
    super(props);
    
    let keys = Object.keys(props.keys)
    keys.pop()

    let items = props.items
    this.state = {
      items,
      keys,
    };
  }
  
  handleEdit = (index, machineName) => {
    if(!machineName) {
    this.props.toggle();
    const item = this.props.items[index]
    this.props.bringItemWillBeEditedFromViewTable(item,index)
    } 
   
  }

  handleDelete = index => {
    axios.delete(`http://localhost:5000/api/entries/${this.props.items[index].id}`)
    .then(response => {
      if(response.data.message) {
          console.error(response.data.message)
        }
      })  
      .catch(error => {
        console.error('Error:', error)
      })
      this.props.deleteEntrieFromState(index)
    }

  static getDerivedStateFromProps(props, state) {
    
  };

  render() {

    const renderedKeys = this.state.keys.map((key, index) => {
                return <th key={index}>{key}</th>
              })

    let renderedItems 
    let values
      if(this.state.items) {
        renderedItems = this.state.items.map((item, index) => {
          values = Object.values(item)
          values.pop();
            return (
              <tr key={index}>
              { 
                values.map((string, index2) => {
               return (
                <td key={index2}>{string.toString()}</td>
                )}
               )}
              <td>
                <Row>
                  <button className="mr-2 btn-outline-info btn-sm" onClick={this.handleEdit.bind(this, index, item.machineName)}>Edit</button>
                  <button className='btn btn-outline-danger btn-sm' onClick={this.handleDelete.bind(this, index)}>Delete</button>
                </Row>
              </td>
              </tr>
              )}
            )
      }

    return (
      <div className="ViewTable">
        <Table striped>
          <thead>
            <tr>
              {renderedKeys}
              <th>Controllers</th>
            </tr>
          </thead>
          <tbody>
          {renderedItems}
            
          </tbody>
        </Table> 
      </div>
    );
  }
}

export default ViewTable;
