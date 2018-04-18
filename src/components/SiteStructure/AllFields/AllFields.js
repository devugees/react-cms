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
        <Button>Save</Button>
        <Button>Cancel</Button>
      </div>
    );
  }
}

export default AllFields;
