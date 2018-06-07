import React, { Component } from "react";
import "./AllFields.css";
//import AddField from '../AddField/AddField';
import ViewTable from "../../ViewTable/ViewTable";

class AllFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldsKeys: {
        FieldLabel: "",
        MachineName: "",
        Type: "",
        TypeOption: "",
        Unique: "",
        Visible: "",
        Required: "",
        CssClasses: "",
        CustomCss: ""
      }
    };
  }

  render() {
    return (
      <div className="AllFields">
        <ViewTable items={this.props.allFields} keys={this.state.fieldsKeys} />
      </div>
    );
  }
}

export default AllFields;
