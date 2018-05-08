import React, { Component } from 'react';
import { Table ,Input,Button,Row } from 'reactstrap';
import './ViewTable.css';

class ViewTable extends Component {

  state = {};

  render() {

    //const keysObj = this.state.items.fields[0];

    const keysObj = this.props.keys;
    console.log("keysObj",keysObj)
    const keys = Object.keys(keysObj);
    console.log("keys",keys)
    const items = this.props.items;
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
            {Object.values(object).map((string,index) => {
             return (<td>{string.toString()}</td>
              )})}
            <td>
            <Row>
              <button>Edit</button>
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