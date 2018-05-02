import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './ContentTypesList.css';
import {Link} from 'react-router-dom';



class ContentTypesList extends Component {
  render() {
    return (
      <div >
          <Link href="/Administration/NewContentType" ><Button>Create New</Button></Link>
      </div>
    );
  }
}

export default ContentTypesList;
