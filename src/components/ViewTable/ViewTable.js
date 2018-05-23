import React, { Component } from 'react';
import { Table ,Input,Button,Row } from 'reactstrap';
import axios from 'axios';
import './ViewTable.css';

class ViewTable extends Component {

  constructor(props) {
    super(props);
    let keysObjWithOutId;
    let keysObj ={};
    let keys = [];
    let items = [];
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
    console.log(items)
    this.state = {
      items,
      keys,
      fields: []
    };
  }


   itemsWithId;
   componentWillReceiveProps =(nextProps, prevState) => {
    this.itemsWithId = JSON.parse(JSON.stringify(nextProps.items));
   }
  handleEdit  (index,machineName) {
    /* Nebras: I have done so much work to reach here
     so now we have the id of the entrie/contentType
     so we can use it to edit in the backend 
     and we have the machineName so we use it to edit the filed in the backend

     We need to do the same for delete but we don't delete we just archive the entrie or make the filied not visable
     */
    console.log(machineName)
    console.log(this.itemsWithId[index].id)
    this.props.toggle()
    this.props.bringItem(this.state.items[index], index)
    /*
    if (this.itemsWithId[index].id) {
      axios.put('/api/entries/:entrieId')
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.error('Error:', error)
      })
    }
    this.setState({ 

    })
    */
  }

  render() {

    return (
      <div className='ViewTable'>
        <Table striped>
          <thead>
            <tr>
              {this.state.keys.map((object,index) => {
                return <th>{object}</th>
              })}
              <th>Controllers</th>
            </tr>
          </thead>
          <tbody>
          {this.state.items.map((object,index) => {
            return (
              <tr>
              {Object.values(object).map((string,index2) => {
               return (
                <td>{string.toString()}</td>
                )}
               )}
              <td>
                <Row>
                  <button onClick={this.handleEdit.bind(this, index,object.machineName)}>Edit</button>
                  <button>Delete</button>
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
};

export default ViewTable;