import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class LayoutComponents extends Component {
  state = {
    content: [],
    contentType: {
      id: '5b0202dc93aec4148ef87ea1',
      name: 'Posts-test'
    },
    fields: ['title', 'body'],
    numperOfPosts: 4,
    viewType: 'Grid',
    columns: 3
  };

  componentDidMount() {
    const {id, name} = this.state.contentType;
    const {fields, numperOfPosts, viewType, columns} = this.state;
    let content = [];
    let contentObj;

    axios
      .get(`http://localhost:5000/api/entries/${id}`)
      .then(response => {
        response.data.map(entrie => {
          contentObj = {...entrie.content};
          return content.push(contentObj);
        });
        this.setState({
          content
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  render() {
    return (
      <div>
        <h1>Lay</h1>
      </div>
    );
  }
}

export default LayoutComponents;
