import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './ContentTypes.css';


class ContentTypes extends Component {
  render() {
    return (
      <div className='ContentTypes'>
          <a href="/Administration/AddContent" ><Button>Create New</Button></a>
      </div>
    );
  }
}

export default ContentTypes;
