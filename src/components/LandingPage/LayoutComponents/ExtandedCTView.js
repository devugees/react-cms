import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './ExtandedCTView.css';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';

class ExtandedCTView extends Component {
  state = {
    entry: {}
  };

  queryComponent = () => {
    axios
      .get(
        `http://localhost:5000/api/entries/one/${
          this.props.match.params.entrieId
        }`
      )
      .then(response => {
        this.setState({entry: response.data});
      })
      .catch(error => {
        console.error('Error: ', error);
      });
  };

  componentDidMount = () => {
    this.queryComponent();
  };

  render() {
    const { content } = this.state.entry;
    let image;
    let body;
    let title;
    let describtion;
    let categories;
    let misc;

      content
        ? Object.keys(content).map(key => {
          return key === 'image' ? (
            image = <CardImg style={{ height: '85vh', boxShadow: '0 10px 6px -6px #777'}} src={content[key]} alt="#"/>
          ) : key === 'title' ? (
           title = <CardTitle style={{fontSize: '1.6rem',fontWeight: 'bold', marginBottom: '1rem'}}>{content[key]}</CardTitle>
          ) : key === 'body' ? (
            body = <CardText style={{boxShadow: '0 0 0 5px hsl(0, 0%, 80%),  0 0 0 10px hsl(0, 0%, 90%)', padding: '1rem', marginBottom: '2rem'}}>{content[key]}</CardText>
          ) : key === 'describtion' ? (
           describtion =  <CardSubtitle style={{marginBottom: '1rem'}}>{content[key]}</CardSubtitle>
          ) : key === 'categories' ? (
           content[key].map(category => {
            categories = (<CardSubtitle style={{padding: '.5rem'}}>{category.label}</CardSubtitle>)
           })) : key === undefined ? (
             misc = <p>content[key]</p>
          ) : null;
        })
        : null
    
    return <div>
            <Card style={{display: 'block', textAlign: 'center', height: '100vh', border: 'none'}}>
              {image}
             <CardBody style={{padding: '1.5rem 15rem'}}>
                {title}
                {body}
                {describtion}
                {categories}
                {misc}
             </CardBody>
            </Card>
           </div>;
    }
}

export default ExtandedCTView;
