import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './AllFields.css';
import AddField from '../AddField/AddField';
import ViewTable from '../../ViewTable/ViewTable';


class AllFields extends Component {
  render() {
    return (
      <div className='AllFields'>
        <ViewTable/>
        <AddField />
      <div className='button'>
        <Button className='FieldsButtons'>Save</Button>
        <Button className='FieldsButtons'>Cancel</Button>
      </div>
      </div>
    );
  }
}

export default AllFields;
