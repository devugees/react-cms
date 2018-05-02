import React, { Component } from 'react';
import { Table ,Input,Button,Row } from 'reactstrap';
import './ViewTable.css';

class ViewTable extends Component {

  state = {
    };


  render() {

    //const tableObj = this.state.items.fields[0];

    const tableObj = this.props.keys;
    console.log("tableObj",tableObj)
    const tableKeys = Object.keys(tableObj);
    console.log("tableKeys",tableKeys)

    const keyVal = this.props.items;
    console.log("keyVal",keyVal)


    return (
      <div className='ViewTable'>
        <Table striped>
        <thead>
          <tr>
            {tableKeys.map((object,index) => {
              return <th>{object}</th>
            })}
            <th>Controllers</th>
          </tr>
        </thead>
        <tbody>
        {keyVal.map((object,index) => {
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