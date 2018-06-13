import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import {Container, Row, Col} from 'reactstrap';
class LayoutComponents extends Component {
  state = {
    content: [],
    contentType: {
      id: '5b0202dc93aec4148ef87ea1',
      name: 'Posts-test'
    },
    // fields: ['title', 'body', 'image'],
    fields: [
      {
        key: 'image',
        element: 'img'
      },
      {
        key: 'body',
        element: 'p'
      },
      {
        key: 'title',
        element: 'h'
      }
    ],
    numperOfPosts: 4,
    viewType: 'Grid',
    columns: 3
  };

  componentDidMount() {
    const {id, name} = this.state.contentType;
    // const {fields, numperOfPosts, viewType, columns} = this.state;
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
    // const {fields, numperOfPosts, viewType, columns} = this.state.content;
    const {content, fields} = this.state;
    let cols = [];
    let elements = [];

    content.map((comp, index) => {
      return cols.push(<Col key={index}>{
        fields.map((field, i) => {
          if (field.element == 'img') {
            return (<img style={{height: "150px",width:"150px"}} src={comp.image} key={i} />)
          } else if (field.element == 'p') {
            return <p key={i}>{comp.body}</p>;
          } else if (field.element == 'h') {
            return <h3 key={i}>{comp.title}</h3>;
          }
        })
        
      }</Col>);
      
      
    });
    // for (let i = 0; i < content.length; i++) {
    //   console.log(comp);
    //   // for (let j = 0; j < fields; j++) {
    //   //   console.log(fields[j]);
    //   //   let field = fields[j];
    //   //   if (field == 'img') {
    //   //     return <img src={content[j].image} />;
    //   //   }
    //   // }

    //   cols.push(<Col key={i}>{i}</Col>);
    // }
    return (
      <div>
        <Row>{cols}</Row>
      </div>
    );
  }
}

export default LayoutComponents;
