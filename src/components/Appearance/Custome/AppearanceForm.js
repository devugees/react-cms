import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Row, Col, Input, Button} from 'reactstrap';
import Select from 'react-select';
import axios from 'axios';
import HandleContentTypeView from './apperanceContentTypecomponent/HandleContentTypeView';


class AppearanceForm extends Component {
  constructor(props) {
    super(props);
  }

  static PropTypes = {
    handleSubmit: PropTypes.func,
  };

  render() {
    const style = {marginBottom: '1em'};
    const btnFile = {marginBottom: '1em', height: '2em'};

    return (
      <div>
      <Form onSubmit={this.props.handleSubmit}>
        <Row>
          <Col>
            <h3>Menu</h3>
            <Input
              defaultValue={this.props.form.websitetitle}
              name="websitetitle"
              style={style}
              placeholder="Website Title"
            />
            <Select
              style={style}
              multi
              joinValues
              value={this.props.value}
              placeholder="Choose Pages for Menu"
              onChange={this.handleSelectChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>IconBox Left </h3>
            <input
              defaultValue={this.props.form.icon1.icon}
              name="licon"
              style={style}
              placeholder="Icon Name"
            />
            <input
              defaultValue={this.props.form.icon1.title}
              name="ltitle"
              style={style}
              placeholder="Title"
            />
            <input
              defaultValue={this.props.form.icon1.text}
              name="ltext"
              style={style}
              placeholder="Text"
            />
          </Col>
          <Col>
            <h3>IconBox Center</h3>
            <input
              defaultValue={this.props.form.icon2.icon}
              name="cicon"
              style={style}
              placeholder="Icon Name"
            />
            <input
              defaultValue={this.props.form.icon2.title}
              name="ctitle"
              style={style}
              placeholder="Title"
            />
            <input
              defaultValue={this.props.form.icon2.text}
              name="ctext"
              style={style}
              placeholder="Text"
            />
          </Col>
          <Col>
            <h3>IconBox Right</h3>
            <input
              defaultValue={this.props.form.icon3.icon}
              name="ricon"
              style={style}
              placeholder="Icon Name"
            />
            <input
              defaultValue={this.props.form.icon3.title}
              name="rtitle"
              style={style}
              placeholder="Title"
            />
            <input
              defaultValue={this.props.form.icon3.text}
              name="rtext"
              style={style}
              placeholder="Text"
            />
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
            <Input
              defaultValue={this.props.form.footertext}
              name="footertext"
              style={style}
              placeholder="Copyright"
            />
            <Select
              style={style}
              multi
              joinValues
              value={this.props.value}
              placeholder="Choose Pages for Footer"
              onChange={this.handleSelectChange}
            />
          </Col>
        </Row>
        <Button type="submit">Submit</Button>
      </Form>
            <div className="mt-4">
             <HandleContentTypeView contenttypeData={this.props.contentTypeData} />
           </div>
      </div>
    );
  }
}

export default AppearanceForm;
