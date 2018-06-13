import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Container, Row, Col} from 'reactstrap';
class LayoutComponents extends Component {
  state = {
    content: [],
    contentType: this.props.contentType
  };

  static propTypes = {
    contentType: PropTypes.object
  };

  /*Lifecycle gets refactored sonn */
  componentDidMount() {
    const {id} = this.state.contentType.contentType;
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
    const {fields} = this.state.contentType;
    let cols = [];

    this.state.content.map((comp, index) => {
      return cols.push(
        <Col key={index}>
          {fields.map((field, i) => {
            if (field.element == 'img') {
              return (
                <img
                  style={{height: '150px', width: '150px'}}
                  src={comp.image}
                  key={i}
                />
              );
            } else if (field.element == 'p') {
              return <p key={i}>{comp.body}</p>;
            } else if (field.element == 'h') {
              return <h3 key={i}>{comp.title}</h3>;
            }
          })}
        </Col>
      );
    });

    return (
      <div>
        <Row>{cols}</Row>
      </div>
    );
  }
}

export default LayoutComponents;
