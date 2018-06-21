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
    this.state= {
       contentTypesArr: [],
       showcomponent: false
                 }
                 
                }

  static propTypes = {
    handleSubmit: PropTypes.func
  };
componentWillReceiveProps(nextProps) {
 this.setState({contentTypesArr: nextProps.contentTypesArr});
}
 

removeContentTyps = (key) => {
  this.props.removeContentTypsFromState(key);
    const contentTypesArrOb = [...this.state.contentTypesArr]
    contentTypesArrOb.splice(key, 1)
    this.setState({contentTypesArr: contentTypesArrOb})
   
  };


  render() {
    const style = {marginBottom: '1em'};
    const btnFile = {marginBottom: '1em', height: '2em'};
    const brdJumbo = { border: "1px solid grey", margin: '0 0 2em 0' };
    const h3Brd = {
      marginTop: " -17px",
      marginLeft: "5px",
      background: "white",
      width: '2.5em'
    };
    let showComponent = this.state.contentTypesArr.map((content, index) => {
      if(content.keyItem) {
            return (<div className="col-md-4">
                      <HandleContentTypeView 
                               bringContentTypeObject={this.props.bringContentTypeObjectFromApperanc}
                               remove={() => {this.removeContentTyps(index)}}
                               selectedValues={content}
                               contentTypes={this.props.contentTypeData}
                               key={index}
                               key1={content.keyItem} 
                           />
                    </div>)
                  } else {
                    return (<div className="col-md-4">
                              <HandleContentTypeView 
                               bringContentTypeObject={this.props.bringContentTypeObjectFromApperanc}
                               remove={() => {this.removeContentTyps(index)}}
                               contentTypes={this.props.contentTypeData}
                               key={index}
                               key1={index}
                           />
                    </div>)
                  }
                 } )
  return (
  <div>
      <Form onSubmit={this.props.handleSubmit}>
        <Row style={brdJumbo}>
          <Col>
            <h3 style={h3Brd}>Menu</h3>
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
            <Row style={{margin: '1em'}}>
              <Col>
                <h5>Slide 1 </h5>
                <div className="mb-3">
                    <FileUploader style={style} name="slide1File" bringFileUrl={this.bringFileUrl} />
                </div>
                <Input defaultValue={this.props.form.slide1.title} name="slide1Title" style={style} placeholder="Title" />
                <Input defaultValue={this.props.form.slide1.text} name="slide1Text" style={style} placeholder="Text" />
              </Col>
              <Col>
                <h5>Slide 2 </h5>
                <div className="mb-3">
                    <FileUploader name="slide2File" bringFileUrl={this.bringFileUrl} />
                </div>
                <Input defaultValue={this.props.form.slide2.title} name="slide2Title" style={style} placeholder="Title" />
                <Input defaultValue={this.props.form.slide2.text} name="slide2Text" style={style} placeholder="Text" />
              </Col>
              <Col>
                <h5>Slide 3 </h5>
                <div className="mb-3">
                    <FileUploader name="slide3File" bringFileUrl={this.bringFileUrl} />
                </div>
                <Input defaultValue={this.props.form.slide3.title} name="slide3Title" style={style} placeholder="Title" />
                <Input defaultValue={this.props.form.slide3.text} name="slide3Text" style={style} placeholder="Text" />
              </Col>
              <Col>
                <h5>Slide 4 </h5>
                <div className="mb-3">
                    <FileUploader name="slide4File" bringFileUrl={this.bringFileUrl} />
                </div>
                <Input defaultValue={this.props.form.slide4.title} name="slide4Title" style={style} placeholder="Title" />
                <Input defaultValue={this.props.form.slide4.title} name="slide4Text" style={style} placeholder="Text" />
              </Col>
            </Row>
          </Row>
          <Row>

          <Col>
            <h3>IconBox Left </h3>
            <Input
              defaultValue={this.props.form.icon1.icon}
              name="licon"
              style={style}
              placeholder="Icon Name"
            />
            <Input
              defaultValue={this.props.form.icon1.title}
              name="ltitle"
              style={style}
              placeholder="Title"
            />
            <Input
              defaultValue={this.props.form.icon1.text}
              name="ltext"
              style={style}
              placeholder="Text"
            />
          </Col>
          <Col>
            <h3>IconBox Center</h3>
            <Input
              defaultValue={this.props.form.icon2.icon}
              name="cicon"
              style={style}
              placeholder="Icon Name"
            />
            <Input
              defaultValue={this.props.form.icon2.title}
              name="ctitle"
              style={style}
              placeholder="Title"
            />
            <Input
              defaultValue={this.props.form.icon2.text}
              name="ctext"
              style={style}
              placeholder="Text"
            />
          </Col>
          <Col>
            <h3>IconBox Right</h3>
            <Input
              defaultValue={this.props.form.icon3.icon}
              name="ricon"
              style={style}
              placeholder="Icon Name"
            />
            <Input
              defaultValue={this.props.form.icon3.title}
              name="rtitle"
              style={style}
              placeholder="Title"
            />
            <Input
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
         <div className="container" >
         <div className="row">
           <div className="col-md-12">
              <Button className="ml-2" onClick={this.props.incremnetContentTyps} color="primary">Add Content</Button>
         </div>
         </div>
         <div className="row">
                 {showComponent}
          </div>
        </div>
         <Button className="mt-4" type="submit">Submit</Button>
      </Form>

      </div>
    );
  }
}

export default AppearanceForm;
