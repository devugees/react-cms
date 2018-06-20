import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


class HandleContentTypeView extends Component {
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
  	console.log("this.props",this.props)
  	console.log("prevProps",prevProps)

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
  }
 onChangeSelct(e) {
    this.setState({[e.target.name]: e.target.value, value: []});

  }
   onChange(e) {
    this.setState({[e.target.name]: e.target.value});
   

  }
 
handletDidUpdate  = () =>{
  	let contenttypeData = this.props.contenttypeData;

	let select = this.state.selectContentType;

   if(this.state.selectContentType) {
   let singlContentType =[];
   let optionsField = contenttypeData.map((items) => items.machineName).indexOf(select);
    singlContentType.push(contenttypeData[optionsField])

    let finalContentType = {};
    finalContentType._id = singlContentType[0]._id
    finalContentType.title = singlContentType[0].title
    finalContentType.machineName = singlContentType[0].machineName
   

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
      finalContentType,
      chosenFields
  }
  if(contentTypeObject.finalContentType !== '' &&
  	   contentTypeObject.chosenFields.length !== 0 ) {
  this.props.bringContentTypeObject(contentTypeObject);
  }
}

}

  render() {

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
  }
}

export default HandleContentTypeView;
