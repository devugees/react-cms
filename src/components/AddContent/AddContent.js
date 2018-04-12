import React, { Component } from 'react';
import './AddContent.css';
import ContentSetting from '../ContentSetting/ContentSetting';


class AddContent extends Component {
  render() {
    return (
      <div className='AddContent'>
        <ContentSetting />
      </div>
    );
  }
}

export default AddContent;
