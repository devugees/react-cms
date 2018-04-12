import React, { Component } from 'react';
import './AddContent.css';
import ContentSetting from '../ContentType-MainSetting/ContentType-MainSetting';


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
