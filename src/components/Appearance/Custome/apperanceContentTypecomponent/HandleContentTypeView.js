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
      select: ''
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.onChange = this.onChange.bind(this);
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
handleSave =(e) => {
 e.preventDefault();
  const content = {
  	 value: this.state.value,
      selectview: this.state.selectview,
      selectEntry: this.state.selectEntry,
      css: this.state.css,
      selectGrid: this.state.selectGrid,
      select: this.state.select
  }
  console.log(content)
}

  render() {
  	let contenttypeData = this.props.contenttypeData;

  	const contenttypeSelectTitle = (
           <div>
              <Label for="exampleSelect">contenttypesTitle</Label>
                 <Input type="select"  name="select"  onChange={this.onChangeSelct.bind(this)}>
                     <option></option>
                 )
                  {contenttypeData.map(item => (
                     <option>{item.machineName}</option>
                    ))}
                 </Input>
                </div>
             );

 let select = this.state.select;
 let singlContentType =[];
 let optionsField = contenttypeData.map((items) => items.machineName).indexOf(select);
    singlContentType.push(contenttypeData[optionsField])

 var handleFields;
 if(this.state.select) {

    handleFields = singlContentType.map(item => item.fields);

 let options = handleFields.map(fields => fields.map((field, index) => (
 	{
      label: field.machineName,
      value: index
    })))

    var categoriesProp = (
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
                 <Input type="select"  name="selectGrid"  onChange={this.onChange}>
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
            {categoriesProp}
           </FormGroup>

           <FormGroup className="mt-4">
           	 <Label for="exampleSelect">Entery Number</Label>
                 <Input type="select"  name="selectEntry"  onChange={this.onChange}>
                     <option>Select</option>
                     <option>1</option>
                     <option>2</option>
                     <option>3</option>
                     <option>4</option>
                 </Input>
           </FormGroup>

            <FormGroup className="mt-4">
           	 <Label for="exampleSelect">View Mode</Label>
                 <Input type="select"  name="selectview"  onChange={this.onChange}>
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
	          <Input type="text" name="css" id="text" placeholder="with a placeholder" onChange={this.onChange} />
           </FormGroup>
           <Button type="Submit" onClick={this.handleSave}>Save</Button>
        </Form>
      </div>
    );
  }
}

export default HandleContentTypeView;
