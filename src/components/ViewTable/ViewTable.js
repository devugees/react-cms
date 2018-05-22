import React, { Component } from 'react';
import { Table ,Input,Button,Row } from 'reactstrap';
import './ViewTable.css';

class ViewTable extends Component {

  state = {
    itemsWithId: null
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    return {itemsWithId: JSON.parse(JSON.stringify(nextProps.items))};
  }

  handleEdit (index,machineName) {
    /* Nebras: I have done so much work to reach here
     so now we have the id of the entrie/contentType
     so we can use it to edit in the backend 
     and we have the machineName so we use it to edit the filed in the backend

     We need to do the same for delete but we don't delete we just archive the entrie or make the filied not visable
     */
    console.log('machineName', machineName)
    console.log('itemsWithId', this.state.itemsWithId[index])
    
  }

  render() {

    let keysObjWithOutId;
    let keysObj ={};
    let keys = [];
    let items = [];

    if(this.props.keys) {
      if(this.props.keys.id){
        keysObj = {...this.props.keys}
        delete keysObj.id
      } else {
      keysObj = this.props.keys;
    }
    }

    keys = Object.keys(keysObj);

    if(this.props.items[0]){
    if(this.props.items[0].id){
      items = this.props.items
      items.map((item)=> {
        delete item.id
      })
    }else {
      items = this.props.items
    }
    }
     
    console.log("items",items)


    return (
      <div className='ViewTable'>
        <Table striped>
        <thead>
          <tr>
            {keys.map((object,index) => {
              return <th>{object}</th>
            })}
            <th>Controllers</th>
          </tr>
        </thead>
        <tbody>
        {items.map((object,index) => {
          return (

            <tr>
            {Object.values(object).map((string,index2) => {
             return (<td>{string.toString()}</td>
              )})}
            <td>
            <Row>
              <button onClick={this.handleEdit.bind(this, index,object.machineName)} >Edit</button>
              <button>Delete</button>
              </Row>
            </td>
            </tr>)
         {/* <tr>
           
            </tr>*/}
            

         })}
        
      </tbody>
    </Table>
    </div>
    );
  }
};

export default ViewTable;