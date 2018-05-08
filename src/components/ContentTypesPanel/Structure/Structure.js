import React, { Component } from 'react';
import {Row, Col, Form } from 'reactstrap';

import TopHeader from '../../Administration/HeaderComponent/HeaderComponent';
import DashBoard from '../../Administration/dashBoard/dashBoard';
import AddField from '../../SiteStructure/AddField/AddField';
import ViewTable from '../../ViewTable/ViewTable';


class Structure extends Component {

  constructor(props) {
    console.log('props', props)
    super() 
    this.state = {
    fields: [props.fields],
    fieldsKeys:{FieldLabel:"",MachineName:"",Type:"",TypeOption:"",Unique:"",Visible:"",Required:"",CssClasses:"",CustomCss:""}
    }  
  }

   getDerivedStateFromProps = (nextProps, prevState) => {
    this.setState({
      fields: nextProps.fields,
    })
  }

  addFields = (field) => {
      const fields = this.state.fields;
      fields.push(field);
      this.setState({fields:fields})
    }

 
	render() {
   const colstyle ={padding: '0',margin:'0 0 0 0', height: 'auto'};
	    return (
	      <div>
          <ViewTable items={this.state.fields} keys={this.state.fieldsKeys}/>
          <Form onSubmit={this.handelSubmit}>
            <AddField addFields={this.addFields} id={this.props.id}/>
          </Form>
        </div>
    );
  }
}

export default Structure;