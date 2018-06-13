import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ContentTypePanel.css';
import AddEntrie from './AddEntrie/AddEntrie';
import EditEntrie from './EditEntrie/EditEntrie';
import ViewTable from '../ViewTable/ViewTable';
import axios from 'axios';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';

 
  class ContentTypePanel extends Component {
 
  constructor(props) {
    super(props);
      this.state = {
        entries:[],
        entriesWithId:[],
        categories: [],
        entriesKeys :{},
        modal: false
      };
      this.toggle = this.toggle.bind(this);
  }
   
  static propTypes = {
   contenttypes: PropTypes.array,
   fields: PropTypes.array,
   id: PropTypes.string
 };

  toggle() {
    this.setState({
      modal: !this.state.modal
   });
  }

  bringEntries = nextProps => {
    let entries = [];
    let entriesWithId= []
    let contentObj;

    axios.get(`http://localhost:5000/api/entries/${nextProps.id}`)
   .then((response) => {
    response.data.map((entrie) => {
      contentObj = {...entrie.content}
      contentObj._id = entrie._id
      entries.push(contentObj)
      entriesWithId = JSON.parse(JSON.stringify(entries))
    })
    entries.map((entrie)=> {
     delete entrie._id
    })
    this.setState({
      entries: entries,
      entriesWithId: entriesWithId,
      entriesKeys: entries[0]
    })
    }).catch(function(error) {
      console.error("Error: ", error);
    });
  }

  bringCategories = nextProps => {

    axios.get(`http://localhost:5000/api/categories/${nextProps.id}`)
        .then((response) => {
                    this.setState({
                      categories: response.data
                    })
          }).catch((error) => {
            console.log("Error: ", error);
          });
  }

  componentDidMount = () => {
    this.bringEntries(this.props)
    this.bringCategories(this.props)  
  }

  componentWillReceiveProps = (nextProps, prevState) => {

    if(nextProps.id != this.props.id) {
    this.bringEntries(nextProps)
    this.bringCategories(nextProps)
    }
  }

  addNewEntrieToState = content => {  /* Adding the New Entrie to the state from the AddEntrie Componnent  */
     let stateEntries = this.state.entries 
     stateEntries.push(content)
     this.setState({
      entries: stateEntries
    })
  }

  deleteEntrieFromState = index => {
    console.log(index)
    let entries = [...this.state.entries]   
    entries.splice(index,1)
    this.setState({entries})
  }

  itemWillBeEdited = {};

  bringItemWillBeEditedFromViewTable = (item,index) => {
    this.itemWillBeEdited.index = index
    this.itemWillBeEdited.item = item
    this.itemWillBeEdited._id = this.state.entriesWithId[index]._id
    console.log("itemWillBeEdited",this.itemWillBeEdited);
  }
   

  AddEditedItemToState = (item,index) => {
    console.log("item" ,item);
      let entries = [...this.state.entries]
      let entriesWithId = [...this.state.entriesWithId]
      let newItem = item    
      entries[index] = newItem
      entriesWithId[index] = newItem
      console.log("AddEditedItemToState",entries[index]);
      this.setState({
        entries:entries
      })
      console.log("this.state.entries",this.state.entries);
  }
 
  render() {
    return (
      <div className="ContentTypePanel">
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <EditEntrie
             toggle={this.toggle}
             categorie={this.state.categories}
             itemWillBeEdited={this.itemWillBeEdited}
             AddEditedItemToState={this.AddEditedItemToState}
             fields={this.props.fields}
             contentTypeId={this.props.id}
              />

          </ModalBody>
        </Modal>
        <ViewTable
        bringItemWillBeEditedFromViewTable={this.bringItemWillBeEditedFromViewTable}
        deleteEntrieFromState={this.deleteEntrieFromState}
        toggle={this.toggle}
        items={this.state.entries}
        itemsWithId={this.state.entriesWithId}
        keys={this.state.entriesKeys}
        />
        
        <AddEntrie  
        fields={this.props.fields} 
        contentTypeId={this.props.id}
        addNewEntrieToState={this.addNewEntrieToState}
        categorie={this.state.categories}
        action = "Add"
         />
      </div>
    );
  }
}

export default ContentTypePanel;
