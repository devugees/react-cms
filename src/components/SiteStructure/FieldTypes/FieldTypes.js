import React, { Component } from 'react';
import NewType from './NewType/NewType';
import './FieldTypes.css';
import { Button } from 'reactstrap';
import ViewTable from '../../ViewTable/ViewTable';

class FieldTypes extends Component {
  render() {
    return (
      <div className='FieldTypes'>
      <Button>Create New</Button>
        <NewType />
        {/*<ViewTable/>*/}<h1>Here will be view table</h1>
      </div>
    );
  }
}

export default FieldTypes;
