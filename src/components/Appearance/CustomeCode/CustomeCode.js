import React, {Component} from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

class CustomeCode extends Component {
  render() {
    return (
      <div>
        <CodeMirror
          value="<h1>React-CMS</h1>"
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true,
          }}
          onChange={(editor, data, value) => {}}
        />
      </div>
    );
  }
}

export default CustomeCode;
