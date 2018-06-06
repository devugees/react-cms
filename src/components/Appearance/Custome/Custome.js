import React, { Component } from 'react';
import { Form, Row, Col, Input, Button, } from 'reactstrap';
import Select from 'react-select';

class Custome extends Component {
  constructor(props) {
    super(props);
      this.state = {
        categories: [],
        value: [],
        crazy: false,
        loading: false
    }
  }
  render() {

    const style = { marginBottom: '1em' }
    const btnFile = { marginBottom: '1em', height: '2em' }

    const options = this.state.categories.map((item, index) => (
      {
        label: item.name,
        value: index
       }
    ))

    return (
      <Form>
          <Row>
            <Col>
              <h3>Menu</h3>
              <Input style={style} placeholder="Website Title" />
              <Select 
                style={style}
                multi
                joinValues 
                value={this.state.value}
                placeholder="Choose Pages for Menu"
                options={options} 
                onChange={this.handleSelectChange} />
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>IconBox Left </h3>
              <Input style={style} placeholder="Icon Name" />
              <Input style={style} placeholder="Title" />
              <Input style={style} placeholder="Text" />
            </Col>
            <Col>
              <h3>IconBox Center</h3>
              <Input style={style} placeholder="Icon Name" />
              <Input style={style} placeholder="Title" />
              <Input style={style} placeholder="Text" />
            </Col>
            <Col>
              <h3>IconBox Right</h3>
              <Input style={style} placeholder="Icon Name" />
              <Input style={style} placeholder="Title" />
              <Input style={style} placeholder="Text" />
            </Col>
          </Row>
          <Row>
          <Col>
              <h3>Post</h3>
              <Input style={btnFile} type="file" name="file" id="exampleFile" />
              <Input style={style} placeholder="Title" />
              <Input style={style} placeholder="Text" />
            </Col>
            <Col>
              <h3>Footer</h3>
              <Input style={style} placeholder="Copyright" />
              <Select 
                style={style}
                multi
                joinValues 
                value={this.state.value}
                placeholder="Choose Pages for Footer"
                options={options} 
                onChange={this.handleSelectChange} />
            </Col>
          </Row>
      </Form>
    );
  }
}

export default Custome;
