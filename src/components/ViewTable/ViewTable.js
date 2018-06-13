import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ViewTable.css';
import {Table, Row} from 'reactstrap';
import axios from 'axios';




class ViewTable extends Component {
  constructor(props) {
    super(props);

  }

  static propTypes = {
    bringEntrie: PropTypes.func,
    deleteEntrie: PropTypes.func,
    toggle: PropTypes.func,
    items: PropTypes.array,
    keys: PropTypes.object
  };

  handleEdit = (index, machineName) => {
    if(!machineName) {
    this.props.toggle();
    const item = this.props.items[index]
    this.props.bringItemWillBeEditedFromViewTable(item,index)
    } 
   
  }

  handleDelete = index => {
    axios.delete(`http://localhost:5000/api/entries/${this.props.itemsWithId[index]._id}`)
    .then(response => {
      console.log(response);
      if(response.data.message) {
          console.error(response.data.message)
        }
      })
      .catch(error => {
        console.error('Error:', error)
      })
      this.props.deleteEntrieFromState(index)
    }

  static getDerivedStateFromProps(props, state) {
    
  };

renderedKeys
renderedItems

  render() {
    console.log(this.props.items);
    console.log("type",typeof this.props.items)

    this.renderedKeys = Object.keys(this.props.keys).map((key, index) => {
                return <th key={index}>{key}</th>
              })

    this.renderedItems 
    let values
    
    console.log('len', this.props.items.length);
    if(this.props.items.length > 0) {
        console.log("this.state.items",this.props.items);
        
        this.renderedItems = this.props.items.map((item, index) => {
          values = Object.values(item)
          console.log('item inside map', item);
            return (
              <tr key={index}>
              { 
                values.map((string, index2) => {

                  if( Array.isArray(string) )
                    {
                    return ( 
                    string.map((categorie,index3)=> {
                        console.log(categorie.label);
                        return (
                              <td key={index3}> {categorie.label} </td>
                              )
                      })

                     )
                       
                    } else if (typeof string === "string"){
                      if (string.endsWith(".jpeg")|| string.endsWith(".jpg") || string.endsWith(".gif") , string.endsWith(".png") ) {
                        return (
                          <td key={index2}><img  src={string}
                        style={{
                          width: '100px',
                          height: '100px',
                        }} /> </td>
                        )
                      }
                      else {
                      return (
                              <td key={index2}>{string.toString()}</td>
                              )
                    }
                    }
                    

               }
               )}
              <td>
                <Row>
                  <button className="mr-2 btn-outline-info btn-sm" onClick={this.handleEdit.bind(this, index, item.machineName)}>Edit</button>
                  <button className='btn btn-outline-danger btn-sm' onClick={this.handleDelete.bind(this, index)}>Delete</button>
                </Row>
              </td>
              </tr>
              )}
            )
      }

    
    console.log("renderedItems",this.renderedItems);
    return (
      <div className="ViewTable" style={{overflowY: 'scroll', webkitOverflowScrolling: 'touch', height: '95vh'}}>
        <Table striped>
          <thead>
            <tr>
              {this.renderedKeys}
              <th>Controllers</th>
            </tr>
          </thead>
          <tbody>
          {this.renderedItems}
            
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ViewTable;
