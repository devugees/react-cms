import React, { Component } from 'react';
import './AddContent.css';
import ContentSetting from '../ContentSetting/ContentSetting';
import AddField from '../AddField/AddField';
import {Button} from 'reactstrap';


class AddContent extends Component {
  render() {
    return (
      <div className='AddContent'>
        <ContentSetting />
        <AddField />
          <Button className="btn">Save</Button>
          <Button className="btn">Cancel</Button>
      </div>
    );
  }
}

export default AddContent;
