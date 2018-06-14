import React from 'react';
import {Form, Input, Row, Col} from 'reactstrap';
import '../LandingPage.css';

export default class IconBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      iconTop: '',
      title: 'Lorem ipsum',
      text:
        'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet',
      isSetting: false
    };
  }

  render() {
    const landingPage = {
      margin: '0',
      padding: '0'
    };

    if (!this.state.isSetting) {
      return (
        <Row className="py-5" style={landingPage}>
          <Col className="Box">
            {this.state.icon}
            <h2>{this.state.title}</h2>
            <p>{this.state.text}</p>
            <Row>
              {this.props.icons &&
                this.props.icons.map((item, index) => (
                  <Col sm="4" xs="12" key={index}>
                    <i className={'fa fa-5x ' + item.icon}>{item.name}</i>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      );
    } else {
      return (
        <Form>
          <Input onChange={this.state.iconTop} placeholder="Choose Icon" />
          <Input onChange={this.state.title} placeholder="Title" />
          <Input onChange={this.state.text} placeholder="Text" />
        </Form>
      );
    }
  }
}
