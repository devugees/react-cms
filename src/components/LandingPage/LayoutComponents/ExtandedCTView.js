import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Row, Col} from 'reactstrap';
class ExtandedCTView extends Component {
  
  render() {
    console.log(this.props.match.params.entrieId);
    return (<h1>HII</h1>)
  }
}

export default ExtandedCTView