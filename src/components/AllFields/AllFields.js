import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './AllFields.css';
import AddField from '../AddField/AddField';


class AllFields extends Component {
  render() {
    return (
      <div className='AllFields'>
        <AddField />
        <Button>Save</Button>
        <Button>Cancel</Button>
      </div>
    );
  }
}

export default AllFields;
