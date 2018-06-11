import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';
import './ContentTypesList.css';
import {Link} from 'react-router-dom';

class ContentTypesList extends Component {
  render() {
    return (
      <div>
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
