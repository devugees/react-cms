import React, { Component } from 'react';
import {Row, Col, Form } from 'reactstrap';
import TopHeader from '../../Administration/HeaderComponent/HeaderComponent';
import DashBoard from '../../Administration/dashBoard/dashBoard';
import AddField from '../../SiteStructure/AddField/AddField';
import ViewTable from '../../ViewTable/ViewTable';


class Structure extends Component {

  state = {
    fields:[],
    fieldsKeys:{FieldLabel:"",MachineName:"",Type:"",TypeOption:"",Unique:"",Visible:"",Required:"",CssClasses:"",CustomCss:""}
  }

  componentWillMount = () => {
    this.setState({
      fields: this.props.fields,
    })
   }

  componentWillReceiveProps = (nextProps, prevState) => {
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
	        <h1>Here is the Structure</h1>
          <ViewTable items={this.state.fields} keys={this.state.fieldsKeys}/>
  	      <AddField addFields={this.addFields}/>
        </div>
    );
  }
}

export default Structure;