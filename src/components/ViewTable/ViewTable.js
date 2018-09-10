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
    this.props.toggle();
    const item = this.props.items[index];
    this.props.bringItemWillBeEditedFromViewTable(item, index);
  };

  handleDelete = (index, machineName) => {
    if (!machineName) {
      let itemId = this.props.itemsWithId[index]._id;
      console.log(itemId);
      axios
        .delete(`http://localhost:5000/api/entries/${itemId}`)
        .then(response => {
          console.log(response);
          if (response.data.message) {
            console.error(response.data.message);
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
      this.props.deleteEntrieFromState(index);
    } else {
      this.props.deleteFieldFromState(index);
    }
  };

  renderedKeys;
  renderedItems;

  render() {
    if (!this.props.keys) {
      return null;
    }
    if (this.props.controllers) {

    }
    let controllers = (index,item) => {
      if (this.props.hideControllers) {
        return null
    }else return (
             <td>
              <Row>
                <button
                  className="mr-2 btn-outline-info btn-sm"
                  onClick={this.handleEdit.bind(this, index, item.machineName)}>
                  Edit
                </button>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={this.handleDelete.bind(
                    this,
                    index,
                    item.machineName
                  )}>
                  Delete
                </button>
              </Row>
            </td>
            )
    }
    

    this.renderedKeys = Object.keys(this.props.keys).map((key, index) => {
      return <th key={index}>{key}</th>;
    });

    let values;
    if (this.props.items.length > 0) {
      this.renderedItems = this.props.items.map((item, index) => {
        values = Object.values(item);
        console.log(values);
        return (
          <tr key={index}>
            {values.map((string, index2) => {
              if (Array.isArray(string)) {
                return (
                  <td key={index2}>
                    {string.map((categorie, index3) => {
                      return <span key={index3}> {categorie.label},</span>;
                    })}
                  </td>
                );
              } else if (typeof string === 'string') {
                if (
                  (string.endsWith('.jpeg') ||
                    string.endsWith('.jpg') ||
                    string.endsWith('.gif'),
                  string.endsWith('.png'))
                ) {
                  return (
                    <td key={index2}>
                      <img
                        src={string}
                        style={{
                          width: '100px',
                          height: '100px'
                        }}
                      />{' '}
                    </td>
                  );
                } else {
                  return <td key={index2}>{string.toString().substring(0,100)}</td>;
                }
              } else if (typeof string === 'boolean') {
                return <td key={index2}>{string.toString()}</td>;
              }
            })}
            
            {controllers(index,item)}
          </tr>
        );
      });
    } else {
      this.renderedItems = null;
    }

    return (

      <div
        className="ViewTable"
        style={{
          padding: '0px',
          overflowY: 'scroll',
          webkitOverflowScrolling: 'touch',
          maxHeight: '50vh',
          width: '-webkit-fill-available',
        }}>
        <Table className='TableMediaQ' striped>
          <thead>
            <tr>
              {this.renderedKeys}
              {!this.props.hideControllers ? (<th>Controllers</th>) : null }
              
            </tr>
          </thead>
          <tbody>{this.renderedItems}</tbody>
        </Table>
      </div>
    );
  }
}

export default ViewTable;
