import React, { Component } from 'react';
import { Table } from 'reactstrap';

class ViewTable extends Component {

  state = {
    title : "Posts",
    machineName : "posts",
    url: "/posts",
    des:"This a Posts Content type",
    submetionguidlines:" read so you know how enters the data",
    fields:[
    {label:"Title",machineName:"title",type:"text",unique:true,visible:true,required:true,cssClasses:"title",css:""},
    {label:"Url",machineName:"title",type:"text",unique:true,visible:true,required:true,cssClasses:"title",css:""},
    {label:"Author",machineName:"title",type:"text",unique:true,visible:true,required:true,cssClasses:"title",css:""},
    {label:"Categories",machineName:"title",type:"text",unique:true,visible:true,required:true,cssClasses:"title",css:""},
    {label:"Date",machineName:"title",type:"text",unique:true,visible:true,required:true,cssClasses:"title",css:""}
     ]
    };

  render() {

    const tableObj = this.state.fields[0];
    const tableKeys = Object.keys(tableObj);
    const keyVal = this.state.fields;      

    return (
      <div className='ViewTable'>
        <Table striped>
        <thead>
          <tr>
            {tableKeys.slice(0,5).map((object,index) => {
              return <th>{object}</th>
            })}
          </tr>
        </thead>
        <tbody>
        {keyVal.slice(0,5).map((object,index) => {
          return (
            <tr>
            {Object.values(object).slice(0,5).map((string,index) => {
             return (<td>{string.toString()}</td>
              )})}
            </tr>)
         })}
      </tbody>
    </Table>
    </div>
    );
  }
};

export default ViewTable;