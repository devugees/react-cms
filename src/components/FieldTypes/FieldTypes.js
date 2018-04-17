import React, { Component } from 'react';
import NewType from '../NewType/NewType';
import './FieldTypes.css';
import { Button } from 'reactstrap';


class FieldTypes extends Component {
  render() {
    return (
      <div className='FieldTypes'>
      <Button>Create New</Button>
        <NewType />
      </div>
    );
  }
}

export default FieldTypes;
