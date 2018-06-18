import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";
import Screenshot from "./theme.png";
import { Link } from "react-router-dom";

class Themes extends Component {
  render() {
    const button = { color: "white", textDecoration: "none" };

    return (
      <div>
        <Card style={{ width: "40%", margin: "1em" }}>
          <CardImg top src={Screenshot} alt="Card image cap" />
          <CardBody>
            <CardTitle>Default Theme</CardTitle>
            <CardText>
              Default Theme for a new amazing, dynamic, cute and fluent website.
            </CardText>
            <Button>
              <Link style={button} to="/Administration/main/Custome">
                Customize
              </Link>
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Themes;
