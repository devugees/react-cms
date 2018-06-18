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

    return (
      <div>
        <Row>
          <ViewTable
            contenttypes={this.props.contenttypes}
            items={contentTypesWithoutId}
            keys={contentTypesWithoutId[0]}
          />
        </Row>
        <Link to="/Administration/main/NewContentType">
          <Button>Create New</Button>
        </Link>
      </div>
    );
  }
}

ContentTypesList.propTypes = {
  contenttypes: PropTypes.array
};

export default ContentTypesList;
