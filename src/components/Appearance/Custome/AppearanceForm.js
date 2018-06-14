import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Row, Col, Input, Button } from "reactstrap";
import Select from "react-select";
import axios from "axios";
import randomstring from "randomstring";
import HandleContentTypeView from "./apperanceContentTypecomponent/HandleContentTypeView";
import FileUploader from "../../FileUploader/FileUploader";

class AppearanceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [{ id: randomstring.generate(5) }]
    };
    showcomponent: false;
  }

  static propTypes = {
    handleSubmit: PropTypes.func
  };
  incremnetContentTyps = () => {
    const newPic = {
      id: randomstring.generate(5)
    };
    const pictures = [...this.state.pictures, newPic];
    this.setState({
      pictures: pictures,
      showcomponent: true
    });
  };

  bringFileUrl = (fileUrl, fieldLabel) => {
    console.log("fileUrl", fileUrl);
    let selectedFile = {
      fieldLabel: fieldLabel,
      fileUrl: fileUrl
    };
    this.setState({
      selectedFile: selectedFile
    });
  };

  removeContentTyps = key => {
    const picIndex = this.state.pictures.findIndex(pic => {
      return key === pic.id;
    });

    const pictures = [...this.state.pictures];
    pictures.splice(picIndex, 1);

    this.setState({
      pictures: pictures
    });
  };

  render() {
    const style = { marginBottom: "1em" };
    const btnFile = { marginBottom: "1em", height: "2em" };
    const brdJumbo = { border: "1px solid grey" };
    const h3Brd = {
      marginTop: " -17px",
      marginLeft: "5px",
      background: "white"
    };
    let HandleContentType = this.state.pictures.map((p, index) => (
      <HandleContentTypeView
        remove={() => {
          this.removeContentTyps(p.id);
        }}
        contenttypeData={this.props.contentTypeData}
        key={index}
      />
    ));

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

          <Row style={brdJumbo}>
            <h3 style={h3Brd}> Slider </h3>
            <Row>
              <Col>
                <h5>Slide 1 </h5>
                <FileUploader style={style} bringFileUrl={this.bringFileUrl} />
                <Input style={style} placeholder="Title" />
                <Input style={style} placeholder="Text" />
              </Col>
              <Col>
                <h5>Slide 2 </h5>
                <FileUploader bringFileUrl={this.bringFileUrl} />
                <Input style={style} placeholder="Title" />
                <Input style={style} placeholder="Text" />
              </Col>
              <Col>
                <h5>Slide 3 </h5>
                <FileUploader bringFileUrl={this.bringFileUrl} />
                <Input style={style} placeholder="Title" />
                <Input style={style} placeholder="Text" />
              </Col>
              <Col>
                <h5>Slide 4 </h5>
                <FileUploader bringFileUrl={this.bringFileUrl} />
                <Input style={style} placeholder="Title" />
                <Input style={style} placeholder="Text" />
              </Col>
            </Row>
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
        </Form>

        <div className="row">
          <div className="col-md-12">
            <Button
              className="ml-2"
              onClick={this.incremnetContentTyps}
              color="primary"
            >
              AddContent
            </Button>
            <Button onClick={this.removeContentTyps} color="primary">
              RemoveContent
            </Button>
          </div>
        </div>

        <div className="col-md-4">
          <HandleContentTypeView contenttypeData={this.props.contentTypeData} />
          {this.state.showcomponent ? HandleContentType : null}
        </div>

        <Button type="submit">Submit</Button>
      </div>
    );
  }
}

export default AppearanceForm;
