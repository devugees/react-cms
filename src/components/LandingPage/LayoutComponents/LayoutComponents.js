import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Row, Col} from 'reactstrap';
import {Link} from "react-router-dom";

class LayoutComponents extends Component {
  state = {
    content: [],
    contentIds: [],
    contentTypes: this.props.contentType.choosenContentType
  };

  static propTypes = {
    contentType: PropTypes.object
  };

  /*Lifecycle gets refactored sonn */
  componentDidMount() {
    const {_id} = this.state.contentTypes;
    let content = [];
    let contentObj;
    let contentId;
    let contentIds = [];

    axios
      .get(`http://localhost:5000/api/entries/${_id}`)
      .then(response => {
        response.data.map(entrie => {
          contentObj = {...entrie.content};
          contentId = entrie._id
          contentIds.push(contentId)
          return content.push(contentObj) 
        });
        this.setState({
          content,
          contentIds
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  render() {
    const {chosenFields} = this.props.contentType;
    let cols = [];

    this.state.content.map((con, index) => {
      console.log("con",con)
      let style = {
        border: '.5px solid rgba(0, 0 , 0, .2)',
        padding: '1rem',
        margin: '.5rem',
        height: "auto",
        width: "22rem",
      };
      return cols.push(
        <Col sm="3" md="3" key={index} style={style}>
          {chosenFields.map((field, i) => {
            if (field.htmlElement == 'h1') {
              return <Link to={`/ContentType/entries/${this.state.contentIds[index]}`}> <h5 key={i}>{con.title}</h5></Link>;
            } else if (field.htmlElement == 'img') {
              return (
                <img
                  src={con.image}
                  key={i}
                />
              );
            } else if (field.htmlElement == 'p') {
              return <div><p className='Ponle' key={i}>{con.body.substring(0,200)}</p></div>;
            }

          })}
          <Link to={`/ContentType/entries/${this.state.contentIds[index]}`} className='readMore'>read more ...</Link>
        </Col>
        
      );
    });

    return (
      <div>
        <Row >{cols}</Row>
      </div>
    );
  }
}

export default LayoutComponents;
