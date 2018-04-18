import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './ContentTypesList.css';
import {Link} from 'react-router-dom';



class ContentTypes extends Component {
  render() {
    return (
      <div className='ContentTypes'>
          <Link href="/Administration/NewContentType" ><Button>Create New</Button></Link>
      </div>
    );
  }
}

export default ContentTypes;
