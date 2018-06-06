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
    const btnFile = { marginBottom: '1em', height: '2.8em' }

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
              <h1>Menu</h1>
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
            <Col>
              <h1>Footer</h1>
              <Input style={style} placeholder="Copyright" />
            </Col>
          </Row>
          
          <Row>
            <Col>
              <h1>IconBox</h1>
              <Input style={style} placeholder="Icon Name" />
              <Input style={style} placeholder="Title" />
              <Input style={style} placeholder="Text" />
            </Col>
            <Col>
              <h1>Post</h1>
              <Input style={btnFile} type="file" name="file" id="exampleFile" />
              <Input style={style} placeholder="Title" />
              <Input style={style} placeholder="Text" />
            </Col>
          </Row>
      </Form>
    );
  }
}

export default Custome;
