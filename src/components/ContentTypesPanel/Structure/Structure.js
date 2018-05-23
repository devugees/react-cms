import React, { Component } from 'react';
import { Button,Container, Row, Col, Label, Input, Form, FormGroup } from 'reactstrap';

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
  handelSubmit = () => {

  }
 
	render() {
   const colstyle ={padding: '0',margin:'0 0 0 0', height: 'auto'};
	    return (
	      <div>
        <Container className='ContentSetting'>
          <Form onSubmit={this.handelSubmit}>
            <Row>
            <ViewTable items={this.state.fields} keys={this.state.fieldsKeys}/>
            </Row>

            <Row>
            <AddField addFields={this.addFields} id={this.props.id}/>
            </Row>

            <Row>
            <Button type="submit" className="btn" >Save</Button>
            <Button className="btn">Cancel</Button>
            </Row>

          </Form>
        </Container>
        </div>
    );
  }
}

export default Structure;