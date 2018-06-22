import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Input, Form, FormGroup, Label } from "reactstrap";
import "./AddEntrie.css";
import axios from "axios";
import Select from "react-select";
import "react-select/dist/react-select.css";
import FileUploader from "../../FileUploader/FileUploader";

let newEntrie = {};

class AddEntrie extends Component {
  constructor(props) {
    super(props);
    console.log("props", props);

    this.state = {
      categories: [],
      value: [],
      selectedFile: {},
      crazy: false,
      loading: false,
      remove: false
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  static propTypes = {
    categorie: PropTypes.array,
    contentTypeId: PropTypes.string,
    fields: PropTypes.array,
    addEntrie: PropTypes.func
  };

  componentDidMount = () => {
    console.log("this.props", this.props);
  };

  componentDidUpdate(nextProps, prevState) {}

  static getDerivedStateFromProps(props, state) {
    props.fields.map(field => {
      newEntrie[field.machineName] = "";
    });
    return { categories: props.categorie };
  }

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
  handelChange = e => {
    let inputName = e.target.name;
    newEntrie[inputName] = e.target.value;
    this.setState({[inputName]: e.target.value})
    console.log(newEntrie);
  };

  handelFormSubmit = event => {
    console.log(this.state);
    event.preventDefault();
    if (this.state.value.length > 0) {
      console.log(newEntrie);
      newEntrie.categories = this.state.value;
    }
    if (this.state.selectedFile.fileUrl) {
      console.log(newEntrie);
      newEntrie.image = this.state.selectedFile.fileUrl;
    }
    console.log('wash',newEntrie);
    let theNewestEntrie = { ...newEntrie };
    let newEntrieObj = {
      contentTypeId: this.props.contentTypeId,
      content: theNewestEntrie,
      archived: false
    };
    console.log("newEntrieObj", newEntrieObj);
    axios
      .post("http://localhost:5000/api/newentries", newEntrieObj)
      .then(response => {
        let entrieRes = response.data.entries.content
        let entrieResWithId = JSON.parse(JSON.stringify(entrieRes))
        entrieResWithId._id = response.data.entries._id
        this.props.addNewEntrieToState(entrieRes,entrieResWithId);
      })
      .then(newEntrieObj = {
        contentTypeId: this.props.contentTypeId,
        content: '',
        archived: false
      })
      .then(response => {
        this.setState({title:'', body:'', describtion:'', value:[], selectedFile: {},remove: true })
      
      })
      .catch(function(error) {
        console.log("Error: ", error);
      });

  };
  

  handleSelectChange(value) {
    this.setState({ value });
  }

  render() {
    let options = [];
    if (this.state.categories) {
      options = this.state.categories.map((item, index) => ({
        label: item.name,
        value: index
      }));
    }

    const categoriesProp = (
      <div className="section">
        <h3 className="section-heading">{options.label}</h3>
        <Select
          multi
          joinValues
          value={this.state.value}
          placeholder="Select your favourite(s)"
          style={{height: "44px"}}
          options={options}
          onChange={this.handleSelectChange}
        />
      </div>
    );

    const styleFormGroups = {
      width: "250px",
      float: "left",
      margin: "15px",
      padding: "15px"
    };

    const labelCategorie = {marginBottom: "0"};
    const brdJumbo = { border: "1px solid grey", margin: '2em 1em 0 1em', padding: '1em'};
    const h3Brd = {
      marginTop: " -33px",
      marginLeft: "5px",
      background: "white",
      width: 'auto',
      display: 'table'
    };

    const styleForm = {width: "90%"};

    let allFields = this.props.fields.map((object, index) => {
      const objectMachinename = object.machineName
      if (
        object.type === "image"
      ) {
        return (
          <FormGroup className="col-md-6 mt-1">
            <div>Upload Photo</div>
            <div>
              <FileUploader
                bringFileUrl={this.bringFileUrl}
                fieldLabel={object.fieldLabel}
                remove={this.state.remove}
              />
            </div>
          </FormGroup>
        );
      } else if (
        object.type === "categories"
      ) {
        return (
          <FormGroup className="col-md-6">
            <Label style={labelCategorie}>Categories</Label>
            <div>{categoriesProp}</div>
          </FormGroup>
        );
      }
      return (

        <div key={index}>
          <FormGroup style={styleFormGroups} className="FormGroup">
            <Label for="exampleEmail">{object.fieldLabel}</Label>
            <Input
              name={object.machineName}
              type={object.type}
              required={object.required}
              className={object.cssClasses}
              onChange={this.handelChange}
              value={this.state[object.machineName]}
            />
          </FormGroup>
        </div>
      );
    });

    return (
      <div className="boxs" style={brdJumbo}>
          <h3 style={h3Brd}> {this.props.action} Entry </h3>
        <Form onSubmit={this.handelFormSubmit}>
          <div className="row">{allFields}</div>
        </Form>
        <Button style={{margin: '2em 0 0 0'}} type="submit" className="btn btn-outline-primary">Add New Post</Button>
      </div>
    );
  }
}

export default AddEntrie;
