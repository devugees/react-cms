import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


class HandleContentTypeView extends Component {
 constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      value: [],
      select: ''
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }
  handleSelectChange(value) {
   
    this.setState({value});
  }

   onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
  	let contenttypeData = this.props.contenttypeData;

  	const contenttypeSelectTitle = (
           <div>
              <Label for="exampleSelect">contenttypesTitle</Label>
                 <Input type="select"  name="select" id="exampleSelect" onChange={this.onChange.bind(this)}>
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
 console.log(options)
    var categoriesProp = (
      <div className="section">
        <h3 className="section-heading">{options.label}</h3>
        <Select
          key={options.value}
          multi
          joinValues
          value={this.state.value}
          placeholder="Select your favourite(s)"
          options={options}
          onChange={this.handleSelectChange}
        />
      </div>
    );
} 
    
    return (
      <div>
         <Form>
           {contenttypeSelectTitle}
           {categoriesProp}
           
        </Form>
      </div>
    );
  }
}

export default HandleContentTypeView;
