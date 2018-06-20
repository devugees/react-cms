import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ViewTable from '../../ViewTable/ViewTable';
import {Button, Row} from 'reactstrap';
import './ContentTypesList.css';
import {Link} from 'react-router-dom';

class ContentTypesList extends Component {
  render() {
    let contentTypesWithoutId = JSON.parse(
      JSON.stringify(this.props.contenttypes)
    );
    contentTypesWithoutId.map((content, index) => {
      delete content.__v;
      delete content._id;
      let fields = [...content.fields];
      content.fields = [];
      fields.map((field, index) => {
        content.fields.push({label: field.fieldLabel});
      });
    });
    console.log(contentTypesWithoutId);
    const ButtonStyle = {margin: '1em 0px 0px 0px'}
    const brdJumbo = { border: "1px solid grey", margin: '0 0 2em 0' };
    const h3Brd = {
      marginTop: " -17px",
      marginLeft: "5px",
      background: "white",
      width: 'auto',
      display: 'table'
    };
    const ViewTables = {width: '-webkit-fill-available'}
    return (
      <div style={brdJumbo}>
      <h5 style={h3Brd}>Content List</h5>
          <ViewTable style={ViewTables}
            contenttypes={this.props.contenttypes}
            items={contentTypesWithoutId}
            keys={contentTypesWithoutId[0]}
            hideControllers= {true}
          />

        <Link to="/Administration/main/NewContentType">
          <Button style={ButtonStyle}>Create New</Button>
        </Link>
      </div>
    );
  }
}

ContentTypesList.propTypes = {
  contenttypes: PropTypes.array
};

export default ContentTypesList;
