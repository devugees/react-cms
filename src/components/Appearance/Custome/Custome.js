import React, { Component } from 'react';
import { Form, Row, Col, Input, Button, } from 'reactstrap';
import Select from 'react-select';
import axios from 'axios';

class Custome extends Component {
  constructor(props) {
    super(props);
      this.state = {
        categories: [],
        value: [],
        crazy: false,
        form: {
          icon1: {
            icon: "",
            title: "",
            text: ""
          },
          icon2: {
            icon: "",
            title: "",
            text: ""
          },
          icon3: {
            icon: "",
            title: "",
            text: ""
          },
          footerText: "",
        },
        loading: false
    }
  }
  componentDidMount() {

  fetch('http://localhost:5000/api/appearance')

    .then(resp => resp.json())
    .then((data) => {
        console.log(data);
        this.setState({
          form: data[0]
        })
      })

    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    let form = {};
    for (var i = 0; i < event.target.elements.length; i++) {
      if(event.target.elements[i].value !== "" && event.target.elements[i].name !== ""){
        console.log(event.target.elements[i].value);
        form[event.target.elements[i].name] = event.target.elements[i].value
      }
    }
    axios.post('http://localhost:5000/api/appearance', form)
     .then((response) => {
       console.log(response)

      }).catch(function(error) {
        console.log("Error: ", error);
      });

    console.log(form);
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
      <Form onSubmit={this.handleSubmit}>
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
              <input defaultValue={this.state.form.icon1.icon} name="licon" style={style} placeholder="Icon Name" />
              <input defaultValue={this.state.form.icon1.title} name="ltitle" style={style} placeholder="Title" />
              <input defaultValue={this.state.form.icon1.text} name="ltext" style={style} placeholder="Text" />
            </Col>
            <Col>
              <h3>IconBox Center</h3>
              <input defaultValue={this.state.form.icon2.icon} name="cicon" style={style} placeholder="Icon Name" />
              <input defaultValue={this.state.form.icon2.title} name="ctitle" style={style} placeholder="Title" />
              <input defaultValue={this.state.form.icon2.text} name="ctext" style={style} placeholder="Text" />
            </Col>
            <Col>
              <h3>IconBox Right</h3>
              <input value={this.state.form.icon3.icon} name="ricon" style={style} placeholder="Icon Name" />
              <input value={this.state.form.icon3.title} name="rtitle" style={style} placeholder="Title" />
              <input value={this.state.form.icon3.text} name="rtext" style={style} placeholder="Text" />
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
              <Input name="footertext" style={style} placeholder="Copyright" />
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
          <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default Custome;
