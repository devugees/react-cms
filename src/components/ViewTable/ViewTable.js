import React, { Component } from 'react';
import './ViewTable.css';
import { Table, Row } from "reactstrap";
import axios from 'axios';

let itemsWithId;

class ViewTable extends Component {

  constructor(props) {
    super(props);
    let keysObjWithOutId;
    let keysObj ={};
    let keys = [];
    let items = [];
    let newItems = [];
    console.log(props)
    if(props.keys) {
      if(props.keys.id){
        keysObj = {...props.keys}
        delete keysObj.id
      } else {
      keysObj = props.keys;
      }
    }

    keys = Object.keys(keysObj);

    if(props.items[0]){
      if(props.items[0].id){
        items = props.items
        items.map((item)=> {
          delete item.id
        })
        this.setState({
          items,
          keys
        })
    } else {
      items = props.items
      }
    }
    this.state = {
      items,
      keys,
      fields: []
    };
  }
  
  handleEdit = (index, machineName) => {
    this.props.toggle()
    const itemId = itemsWithId[index].id
    console.log(itemId)
    console.log(this.state.items)
    let items = this.state.items[index]
    items = {...this.state.items[index], index: index}
    this.props.bringItem(items, itemId)
  }

  handleDelete = index => {
    this.props.deleteEntrie(index)
    axios.delete(`http://localhost:5000/api/entries/${this.props.keys.id}`)
    .then(response => {
      if(response.data.message) {
          console.error(response.data.message)
        } else {
        // this.props.editEntrie(this.editedEntrie, this.props.editingItem.item.index);
         this.setState({entries: this.props.item})
        }
      })  
      .catch(error => {
        console.error('Error:', error)
      })
    }

  static getDerivedStateFromProps(props, state) {
    itemsWithId = JSON.parse(JSON.stringify(props.items));
    if(props.newItems) {
      console.log(props.newItems)
      props.newItems.map((item)=> {delete item.id})
      return {items: props.newItems}
    }
    return null;  
  };

  render() {
    return (
      <div className="ViewTable">
        <Table striped>
          <thead>
            <tr>
              {this.state.keys.map((object, index) => {
                return <th key={index}>{object}</th>
              })}
              <th>Controllers</th>
            </tr>
          </thead>
          <tbody>
          {this.state.items.map((object, index) => {
            return (
              <tr key={index}>
              {Object.values(object).map((string, index2) => {
               return (
                <td key={index2}>{string.toString()}</td>
                )}
               )}
              <td>
                <Row>
                  <button className="mr-2 btn-outline-info btn-sm" onClick={this.handleEdit.bind(this, index, object.machineName)}>Edit</button>
                  <button className='btn btn-outline-danger btn-sm' onClick={this.handleDelete.bind(this, index)}>Delete</button>
                </Row>
              </td>
              </tr>
              )}
            )}
          </tbody>
        </Table> 
      </div>
    );
  }
}

export default ViewTable;
