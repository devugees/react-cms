import React, { Component } from 'react';
import './ViewTable.css';
import { Table, Row } from "reactstrap";
import axios from 'axios';

let itemsWithId = [];

class ViewTable extends Component {

  constructor(props) {
    super(props);
    itemsWithId = JSON.parse(JSON.stringify(props.items));
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
    this.props.bringEntrieId(itemId)
  }

  handleDelete = index => {
    let items = [...this.state.items]
    console.log("itemsWithId[index].id",itemsWithId[index].id)
    axios.delete(`http://localhost:5000/api/entries/${itemsWithId[index].id}`)
    .then(response => {
      if(response.data.message) {
          console.error(response.data.message)
        }
      })  
      .catch(error => {
        console.error('Error:', error)
      })
      this.props.deleteEntrie(index)
    }

  static getDerivedStateFromProps(props, state) {
    itemsWithId = JSON.parse(JSON.stringify(props.items));
     props.items.map((item)=> {delete item.id})
    return {
      items:props.items
    }
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
