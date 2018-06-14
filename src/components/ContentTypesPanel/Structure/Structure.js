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
    this.toggle = this.toggle.bind(this);
    this.bringEntries = this.bringEntries.bind(this);
    
  }

  toggle() {
    console.log("it is click")
      this.setState({
        modal: !this.state.modal
     });
    }

    bringEntries = nextProps => {
      let entries = [];
      let contentObj;
      let entriesKeys = {};

      axios.get(`http://localhost:5000/api/entries/${nextProps.id}`)
     .then((response) => {
      response.data.map((entrie) => {
        contentObj = {...entrie.content}
        contentObj.id = entrie._id
        entries.push(contentObj)
      })
      this.setState({
        entries: entries,
        entriesKeys: entries[0]
      })
      }).catch(function(error) {
        console.error("Error: ", error);
      });
    }

  static propTypes = {
    fields: PropTypes.array,
    id: PropTypes.string
  };

  componentWillMount = () => {
    this.setState({
      fields: this.props.fields
    });
  };

  componentWillReceiveProps = (nextProps, prevState) => {
    this.setState({
      fields: nextProps.fields
    });
  };

  addFields = (field) => {
      const fields = this.state.fields;
      fields.push(field);
      this.setState({fields:fields})
    }

  handelSubmit = (event) => {
    event.preventDefault();
    const fieldsObj = {
      fields: this.state.fields
    }
    console.log(fieldsObj)
    axios
      .post(`http://localhost:5000/api/contenttypes/fields/${this.props.id}`, fieldsObj)
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
	    return (
	      <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
              <EditField toggle={this.toggle} itemWillBeEdited={this.itemWillBeEdited} bringItem={this.bringItem} 
              bringEntrie={this.props.bringEntrie} editingItem={this.editingItem} fields={this.props.fields} />
            </ModalBody>
          </Modal>

          <Form onSubmit={this.handelSubmit}>
            <Row>
            <ViewTable toggle={this.toggle} items={this.state.fields}  bringEntrie={this.bringEntrie}  keys={this.state.fieldsKeys}/>
            </Row>

            <Row>
              <AddField addFields={this.addFields} id={this.props.id} />
            </Row>

            <Row className='float-right'>
            <Button type="submit" className="btn mt-2 btn btn-outline-success btn-md" >Save</Button>
            <Button className="btn ml-2 mt-2 btn btn-outline-secondary btn-md">Cancel</Button>
            </Row>

          </Form>
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
