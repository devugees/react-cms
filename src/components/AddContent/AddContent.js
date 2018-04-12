import React, { Component } from 'react';
import './AddContent.css';
import ContentSetting from '../ContentSetting/ContentSetting';
import AddField from '../AddField/AddField';


class AddContent extends Component {
  render() {
    return (
      <div className='AddContent'>
        <ContentSetting />
        <AddField />
      </div>
    );
  }
}

export default AddContent;
