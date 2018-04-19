import React, { Component } from 'react';
import './NewContentType.css';
import ContentSetting from './ContentSetting/ContentSetting';
import AddField from '../AddField/AddField';
import ViewTable from '../../ViewTable/ViewTable';
import {Button} from 'reactstrap';


class NewContentType extends Component {

  state = {
    
    fields: [

    ]
  };

    addFields = (field) => {
      const fields = this.state.fields;
      fields.push(field);
      this.setState({fields:fields})
    }

  render() {
    return (
      <div className='AddContent'>
        <ContentSetting />
        <ViewTable/>
        <AddField addfield={this.addFields} />
          <Button className="btn">Save</Button>
          <Button className="btn">Cancel</Button>
      </div>
    );
  }
}

export default NewContentType;
