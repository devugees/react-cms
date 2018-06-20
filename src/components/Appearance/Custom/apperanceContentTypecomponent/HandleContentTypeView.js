import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class HandleContentTypeView extends Component {
<<<<<<< HEAD:src/components/Appearance/Custom/apperanceContentTypecomponent/HandleContentTypeView.js
 constructor(props) {
    super(props);
    this.state = {
      value: [],
      selectview: '',
      selectEntry: '',
      css: '',
      selectGrid: '',
      selectContentType: '',
      finalContentType: {},
      chosenFields: []
      
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount = () => {
    if (this.props.selectedValues) {
    	for (var key in this.props.selectedValues) {
    		console.log(key)
    		this.setState({ [key]: this.props.selectedValues.key})
    	}
    }  
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevProps != this.props) {

	    if (this.props.selectedValues) {

	    	for (var key in this.props.selectedValues) {
	    		console.log("key",key)
	    		this.setState({ [key]: this.props.selectedValues.key})
	    	}
	    } 
    }
  }





  handleSelectChange(value) {
    this.setState({value});
=======
  constructor(props) {
      super(props);
      this.state = {
          value: [],
          viewType: '',
          numberOfEntries: '',
          css: '',
          numberOfColomus: '',
          selectContentType: '',
          choosenContentType: false,
          chosenFields: []
      };
  }

  componentDidMount = () => {
      if (this.props.selectedValues) {
          let selectedValues = this.props.selectedValues
          for (var key in selectedValues) {
              console.log(key)
              this.setState({[key]: this.props.selectedValues[key]})
          }
      }
>>>>>>> copyAddTypeView:src/components/Appearance/Custome/apperanceContentTypecomponent/HandleContentTypeView.js
  }

  componentDidUpdate = (prevProps, prevState) => {
      if (prevProps != this.props) {

          if (this.props.selectedValues) {
              let selectedValues = this.props.selectedValues
              let value = selectedValues
                  .chosenFields
                  .map((field, index) => ({label: field.machineName, value: index}))

              for (var key in selectedValues) {
                  console.log("key", key)
                  this.setState({[key]: this.props.selectedValues[key], value})
              }
          }
      }
  }
<<<<<<< HEAD:src/components/Appearance/Custom/apperanceContentTypecomponent/HandleContentTypeView.js
   onChange(e) {
    let contenttypeData = this.props.contenttypeData;

  let select = e.target.value;

   if(e.target.value) {
   let singlContentType =[];
   let optionsField = contenttypeData.map((items) => items.machineName).indexOf(select);
    singlContentType.push(contenttypeData[optionsField])

    let finalContentType = {};
    finalContentType._id = singlContentType[0]._id
    finalContentType.title = singlContentType[0].title
    finalContentType.machineName = singlContentType[0].machineName

    this.setState({[e.target.name]: e.target.value,finalContentType});
  }
}
 
handletDidUpdate  = () => {
  
    let contenttypeData = this.props.contenttypeData;
      let singlContentType =[];
   let optionsField = contenttypeData.map((items) => items.machineName).indexOf(this.state.finalContentType.title);
    singlContentType.push(contenttypeData[optionsField])

     let chosenFields = [];
     let  handleFields;
    if(this.state.selectContentType) {
     handleFields = singlContentType.map(item => item.fields);
     this.state.value.map(item => {
  	handleFields[0].map((field) => {
  		if (item.label === field.machineName) {
  			chosenFields.push(field)
  		}
  	})
   });
  }
  let contentTypeObject = {
  	  keyItem: this.props.key1,
      selectview: this.state.selectview,
      selectEntry: this.state.selectEntry,
      css: this.state.css,
      selectGrid: this.state.selectGrid,
      finalContentType: this.state.finalContentType,
      chosenFields
  }
  if(contentTypeObject.finalContentType !== '' &&
  	   contentTypeObject.chosenFields.length !== 0 ) {
  this.props.bringContentTypeObject(contentTypeObject);
  }
}
=======

  onInputChange = (e, value) => {
      if (e) {
          if (e.target.name === "choosenContentType") {
              let contentTypeIndex = this
                  .props
                  .contentTypes
                  .map((items) => items.machineName)
                  .indexOf(e.target.value);
              this.setState({choosenContentType: this.props.contentTypes[contentTypeIndex], value: []});
          } else {
              this.setState({
                  [e.target.name]: e.target.value
              });
          }
      } else if (value) {

          let chosenFields = [];
          let values = [...value]
          values.map(item => {
              this
                  .state
                  .choosenContentType
                  .fields
                  .map((field) => {
                      if (item.label === field.machineName) {
                          chosenFields.push(field)
                      }
                  })
          });
          this.setState({value, chosenFields});
      }
  }

  saveClick = () => {
      if (this.state.choosenContentType) {
          // creating our final object from the state data
          let contentTypeSection = {
              choosenContentType: this.state.choosenContentType,
              chosenFields: this.state.chosenFields,
              numberOfEntries: this.state.numberOfEntries,
              viewType: this.state.viewType,
              numberOfColomus: this.state.numberOfColomus,
              css: this.state.css,
              keyItem: this.props.key1
          }

          // validation there should be at least the contentType and the fields
          if (contentTypeSection.choosenContentType !== '' && contentTypeSection.chosenFields.length !== 0) {
              this
                  .props
                  .bringContentTypeObject(contentTypeSection);
          }

      }
  }
>>>>>>> copyAddTypeView:src/components/Appearance/Custome/apperanceContentTypecomponent/HandleContentTypeView.js



  render() {
<<<<<<< HEAD:src/components/Appearance/Custom/apperanceContentTypecomponent/HandleContentTypeView.js

  	let contenttypeData = this.props.contenttypeData;
  	const contenttypeSelectTitle = (
           <div>
              <Label for="exampleSelect">contenttypesTitle</Label>
                 <Input type="select" value={this.state.finalContentType.machineName}  name="selectContentType"  onChange={this.onChangeSelct.bind(this)}>
                     <option></option>
                 )
                  {contenttypeData.map(item => (
                     <option>{item.machineName}</option>
                    ))}
                 </Input>
                </div>
             );

 let select = this.state.selectContentType;
 let singlContentType =[];
 let optionsField = contenttypeData.map((items) => items.machineName).indexOf(select);
    singlContentType.push(contenttypeData[optionsField])

 var handleFields;
 if(this.state.selectContentType) {

    handleFields = singlContentType.map(item => item.fields);

 let options = handleFields.map(fields => fields.map((field, index) => (
 	{
      label: field.machineName,
      value: index
    })))

    var contentTypesProp = (
      <div className="section">
      <Label className="mt-4 mb-0">Fields</Label>
        <h3 className="section-heading">{options.label}</h3>
        <Select
          key={options.value}
          multi
          joinValues
          value={this.state.value}
          placeholder="Select your favourite(s)"
          options={options[0]}
          onChange={this.handleSelectChange}
        />
      </div>
    );
} 


    let viewColomus;
   if(this.state.selectview === 'Grid') {
       viewColomus= (
            <div className="mt-4">
           	 <Label for="exampleSelect">Colomus</Label>
                 <Input type="select" value={this.state.selectGrid}  name="selectGrid"  onChange={this.onChange}>
                     <option>Select</option>
                     <option>1</option>
                     <option>2</option>
                     <option>3</option>
                     <option>4</option>
                     <option>5</option>
                     <option>6</option>
                     <option>7</option>
                     <option>8</option>
                     <option>9</option>
                     <option>10</option>
                     <option>11</option>
                     <option>12</option>
                 </Input>
           </div>
       	)
   } else {
    	viewColomus;
   }

    return (
      <div>
         <Form >
           <FormGroup>
           {contenttypeSelectTitle}
           </FormGroup>

           <FormGroup>
            {contentTypesProp}
           </FormGroup>

           <FormGroup className="mt-4">
           	 <Label for="exampleSelect">Entery Number</Label>
                 <Input type="number" value={this.state.selectEntry}  name="selectEntry"  onChange={this.onChange}>
                 </Input>
           </FormGroup>

            <FormGroup className="mt-4">
           	 <Label for="exampleSelect">View Mode</Label>
                 <Input type="select"  value={this.state.selectview} name="selectview"  onChange={this.onChange}>
                     <option>Select</option>
                     <option>Grid</option>
                     <option>Slider</option>
                     <option>List</option>
                 </Input>
           </FormGroup>
            
           <FormGroup>
            	{viewColomus}
           </FormGroup>
           <FormGroup>
	          <Label for="exampleEmail">Css</Label>
	          <Input type="text" name="css" value={this.state.css} id="text" placeholder="with a placeholder" onChange={this.onChange} />
           </FormGroup>
              <Button onClick={this.props.remove} color="primary">X</Button>
              <Button onClick={this.handletDidUpdate} color="primary">Save</Button>
        </Form>
      </div>
    );
=======
      if (this.props.contentTypes) {
          let contentTypes = this.props.contentTypes;
          let selectContentType;
          let contentTypeFields;

          // if there is contentTypes coming then we create the select input to select one
          if (this.props.contentTypes) {
              selectContentType = (
                  <div>
                      <Label for="exampleSelect">Choose Content Type:</Label>
                      <Input
                          type="select"
                          value={this.state.choosenContentType.machineName}
                          name="choosenContentType"
                          onChange={this.onInputChange}>
                          <option></option>
                          ) {contentTypes.map(item => (
                              <option>{item.machineName}</option>
                          ))}
                      </Input>
                  </div>
              );
          }
          /// If the user choosed a contentType we show the fields select
          if (this.state.choosenContentType) {
              contentTypeFields = this.state.choosenContentType.fields
              // we perpare the options for the multi select Commp
              let options = contentTypeFields.map((field, index) => ({label: field.machineName, value: index}))
              console.log("fieldsOptions", options)

              var selectContentTypeFields = (
                  <div className="section">
                      <Label className="mt-4 mb-0">Fields</Label>
                      <h3 className="section-heading">{options.label}</h3>
                      <Select
                          key={options.value}
                          multi
                          joinValues
                          value={this.state.value}
                          placeholder="Select your favourite(s)"
                          options={options}
                          onChange={this
                          .onInputChange
                          .bind(this, this.value)}/>
                  </div>
              );
          }
          /////////// we show the colomus select incase the user choosed the grid View
          let viewColomus;
          if (this.state.viewType === 'Grid') {
              viewColomus = (
                  <div className="mt-4">
                      <Label for="exampleSelect">Colomus</Label>
                      <Input
                          type="select"
                          value={this.state.numberOfColomus}
                          name="numberOfColomus"
                          onChange={this.onInputChange}>
                          <option>Select</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                      </Input>
                  </div>
              )
          } else {
              viewColomus;
          }
          ///////////

          return (
              <div>
                  <Form >
                      <FormGroup>
                          {selectContentType}
                      </FormGroup>

                      <FormGroup>
                          {selectContentTypeFields}
                      </FormGroup>

                      <FormGroup className="mt-4">
                          <Label for="exampleSelect">Entery Number</Label>
                          <Input
                              type="number"
                              value={this.state.numberOfEntries}
                              name="numberOfEntries"
                              onChange={this.onInputChange}></Input>
                      </FormGroup>

                      <FormGroup className="mt-4">
                          <Label for="exampleSelect">View Mode</Label>
                          <Input
                              type="select"
                              value={this.state.viewType}
                              name="viewType"
                              onChange={this.onInputChange}>
                              <option>Select</option>
                              <option>Grid</option>
                              <option>Slider</option>
                              <option>List</option>
                          </Input>
                      </FormGroup>

                      <FormGroup>
                          {viewColomus}
                      </FormGroup>

                      <FormGroup>
                          <Label for="css">Css</Label>
                          <Input
                              type="text"
                              name="css"
                              value={this.state.css}
                              id="text"
                              placeholder="with a placeholder"
                              onChange={this.onInputChange}/>
                      </FormGroup>

                      <Button onClick={this.props.remove} color="primary">
                          X
                      </Button>

                      <Button
                          onClick={this
                          .saveClick
                          .bind(this)}
                          color="primary">
                          Save
                      </Button>
                  </Form>
              </div>
          );
      } else 
          return null
>>>>>>> copyAddTypeView:src/components/Appearance/Custome/apperanceContentTypecomponent/HandleContentTypeView.js
  }
}

export default HandleContentTypeView;
