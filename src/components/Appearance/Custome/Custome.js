import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback, FormText, Container, Row, Col } from 'reactstrap';


class Custome extends Component {

  state = {
    theme: {},
    sectionBox:[],
    columnSection: []
  }

  addColumn = () => {
  const style = {outLine: 'none'}
  const column = (<Input style={style} type="select" name="select" id="exampleSelect">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </Input>
                  )
    let columnSection = [...this.state.columnSection];
    columnSection.push(column);
    this.setState({columnSection})
  }

  createSection = () => {
    
    const section = (<Button size="md" color="danger" onClick={this.addColumn}>Add column</Button>)
    let sectionBox = [...this.state.sectionBox];
    sectionBox.push(section)
    this.setState({sectionBox})
    }

  render() {
    return (
      <Container>
        <Row>
          <Col>
           <h1 sm="8">Create your sections</h1>
          </Col>
          <Col sm="4">
            <Button size="lg" color="primary" onClick={this.createSection}>Create a Section</Button>
          </Col>
        </Row>
        <Row>
          <Col sm="8">
          {this.state.columnSection} 
          </Col>
          <Col sm="4">
          {this.state.sectionBox}
          </Col>
       </Row>
     </Container>
    );
  }
}

export default Custome;
