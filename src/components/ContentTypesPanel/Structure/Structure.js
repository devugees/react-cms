import React, { Component } from 'react';
import { Button,Container, Row, Form, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TopHeader from '../../Administration/HeaderComponent/HeaderComponent';
import DashBoard from '../../Administration/dashBoard/dashBoard';
import AddField from '../../SiteStructure/AddField/AddField';
import ViewTable from '../../ViewTable/ViewTable';
import EditField from '../EditField/EditField';
import axios from 'axios';
import PropTypes from 'prop-types';



class Structure extends Component {

  constructor(props) {
    super(props);
    this.state = {
    fields: [props.fields],
    fieldsKeys:{ 
      FieldLabel:"",
      MachineName:"",
      Type:"",
      HtmlElement:"",
      TypeOption:"",
      Unique:"",
      Visible:"",
      Required:"",
      CssClasses:"",
      CustomCss:"",
     },
    modal: false
    }  
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    console.log("it is click")
      this.setState({
        modal: !this.state.modal
     });
    }

  static propTypes = {
    fields: PropTypes.array,
    id: PropTypes.string
  };


  componentDidMount = () => {
    this.setState({fields: this.props.fields}) 
  }


  componentDidUpdate = (prevProps, prevState) => {
    
    if(prevProps != this.props) {
    this.setState({fields: this.props.fields})
    }
  }

  /*static getDerivedStateFromProps(props, state) {
      return {fields: props.fields}
  };*/

  addFields = (field) => {
    console.log("it is arriving",field);
      const fields = [...this.state.fields];
      fields.push(field);
      console.log("fields",fields);
      this.setState({fields:fields})
  }
  editFields = (field,index) => {
      const fields = [...this.state.fields];
      fields[index] = field;
      this.setState({fields:fields})
  }

itemWillBeEdited = {};

  bringItemWillBeEditedFromViewTable = (item,index) => {
    this.itemWillBeEdited.index = index
    this.itemWillBeEdited.item = item
    console.log("itemWillBeEdited",this.itemWillBeEdited);
  }

  deleteFieldFromState = index => {
    const fields = [...this.state.fields];
    fields.splice(index,1)
    this.setState({fields})
  }


  handelClick = (event) => {
    event.preventDefault();
    const fieldsObj = {
      fields: this.state.fields
    }
    console.log(fieldsObj)
    axios
      .put(`http://localhost:5000/api/contenttypes/fields/${this.props.id}`, fieldsObj)
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          alert("your contentType is submaited");
        } else {
          alert("there is a problem");
        }
      })
      .catch(error => {
        console.log("Error: ", error);
      });

  }
 
	render() {
    const colstyle ={padding: '0',margin:'0 0 0 0', height: 'auto'};
    const brdJumbo = { border: "1px solid grey", margin: '0 0 2em 0' };
    const h3Brd = {
      marginTop: " -17px",
      marginLeft: "5px",
      background: "white",
      width: 'auto',
      display: 'table'
    };
    const AddFieldStyle = {margin: '0'}
      return (
	      <div className='StructurePage'>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
              <EditField
                toggle={this.toggle}
                editFields={this.editFields}
                itemWillBeEdited={this.itemWillBeEdited}
                fields={this.props.fields} />
            </ModalBody>
          </Modal>

            <Row style={brdJumbo}>
            <h5 style={h3Brd}>All your fields</h5>
            <ViewTable 
              deleteFieldFromState={this.deleteFieldFromState}
              bringItemWillBeEditedFromViewTable={this.bringItemWillBeEditedFromViewTable}
              toggle={this.toggle}
              items={this.state.fields}
              keys={this.state.fieldsKeys}/>
            </Row>

            <Row style={AddFieldStyle}>
              <AddField addFields={this.addFields} id={this.props.id} />
            </Row>

            <Row className='float-right' style={AddFieldStyle}>
            <Button type="submit" className="btn mt-2 btn btn-outline-success btn-md"  onClick={this.handelClick} >Save</Button>
            <Button className="btn ml-2 mt-2 btn btn-outline-secondary btn-md">Cancel</Button>
            </Row>
        </div>
    );
  }
}

export default Structure;


