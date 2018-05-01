import React, { Component } from 'react';
import './ContentTypePanel.css';
import AddEntrie from './AddEntrie/AddEntrie'

  class ContentTypePanel extends Component {

  render() {
    return (
      <div>
          <h1>ContentTypePanel Component</h1>
          <AddEntrie/>
      </div>
    );
  }
}
export default ContentTypePanel;