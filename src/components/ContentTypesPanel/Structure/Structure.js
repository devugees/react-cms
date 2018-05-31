import React, { Component } from 'react';
import { Button,Container, Row, Form, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TopHeader from '../../Administration/HeaderComponent/HeaderComponent';
import DashBoard from '../../Administration/dashBoard/dashBoard';
import AddField from '../../SiteStructure/AddField/AddField';
import ViewTable from '../../ViewTable/ViewTable';
import EditField from '../EditField/EditField';


class Structure extends Component {

  constructor(props) {
    super();
    this.state = {
    fields: [props.fields],
    fieldsKeys:{ 
      FieldLabel:"",
      MachineName:"",Type:"",
      TypeOption:"",Unique:"",
      Visible:"",Required:"",
      CssClasses:"",
      CustomCss:"",
     },
    modal: false
    }  
    this.toggle2 = this.toggle2.bind(this);
  }

  toggle2() {
    console.log("it is click")
      this.setState({
        modal: !this.state.modal
     });
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
        <Modal isOpen={this.state.modal} toggle2={this.toggle2} className={this.props.className}>
          <ModalHeader toggle2={this.toggle2}>Modal title</ModalHeader>
          <ModalBody>
            <EditField itemWillBeEdited={this.itemWillBeEdited} bringItem={this.bringItem} editingItem={this.editingItem} fields={this.props.fields} />
          </ModalBody>
        </Modal>


        <Container className='ContentSetting'>
          <Form onSubmit={this.handelSubmit}>
            <Row>
            <ViewTable toggle2={this.toggle2} items={this.state.fields} keys={this.state.fieldsKeys}/>
            </Row>

            <Row>
            <AddField addFields={this.addFields} id={this.props.id}/>
            </Row>

            <Row className='float-right'>
            <Button type="submit" className="btn mt-2 btn btn-outline-success btn-md" >Save</Button>
            <Button className="btn ml-2 mt-2 btn btn-outline-secondary btn-md">Cancel</Button>
            </Row>

          </Form>
        </Container>
        </div>
    );
  }
}

export default Structure;

/*

<EditField toggle2={this.toggle}
            itemWillBeEdited={this.itemWillBeEdited}
            bringItem={this.bringItem}
            editingItem={this.editingItem}
            fields={this.props.fields} /> 

            */