import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import Screenshot from "./theme.png";

class Themes extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "40%", margin: "1em" }}>
          <CardImg top src={Screenshot} alt="Card image cap" />
          <CardBody>
            <CardTitle>Default Theme</CardTitle>
            <CardText>
              Default Theme for a new amazing, dynamic, cute and fluent website.
            </CardText>
            <Button>Customize</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Themes;
