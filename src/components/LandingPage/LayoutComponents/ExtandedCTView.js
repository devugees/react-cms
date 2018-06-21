import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

class ExtandedCTView extends Component {
  state = {
    id: '5b2a386449988f99d479770a',
    entry: {}
  };

  queryComponent = () => {
    axios
      .get(`http://localhost:5000/api/entries/one/${this.state.id}`)
      .then(response => {
        this.setState({
          entry: response.data
        });
      })
      .catch(error => {
        console.error('Error: ', error);
      });
  };

  componentDidMount = () => {
    this.queryComponent();
  };

  render() {
    const { content } = this.state.entry
    return (
      <div>
      {content ?
        Object.keys(content).map(key => {
          return (
            key === 'image' ? <img src={content[key]} alt="" /> : 
            key === 'title' ? <h1>{content[key]}</h1> :
            key === 'body' ? <p>{content[key]}</p> :
            key === 'describtion' ? <span>{content[key]}</span> :
            key === 'categories' ? 
            content[key].map(category => <span>{`${category.label}-${category.value}`}</span> )
            : null
        )}) : null}
    </div>);
  }
}

export default ExtandedCTView;

