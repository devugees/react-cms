import React, { Component } from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    Row,
    Jumbotron,
    Col,
    DropdownItem } from 'reactstrap';
import './LandingPage.css';
import axios from 'axios';
import * as Icon from 'react-icons/lib/fa';


class LandingPage extends Component {


    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
    
      toggle() {
      this.setState({
        isOpen: !this.state.isOpen
        });
      }

      theme ={ 
        sections:[
          {
            layout: {
              columns : 1,
            },
            style: { 
              background: {
                image: "",
                color: "",
                video: ""
              },
            },
            advanced: {
              margin: "",
              padding: "",
              cssID: "",
              cssClasses: ""
            },
          },
        ],
        }

          section =  {
            layout: {
              columns : {
                fieldLabel: "columns",
                type:"number" ,
                visible:true ,
              }
            },
            style: { 
              background:  {
                fieldLabel: "background",
                type:"select" ,
                typeOption:"image,color,video" ,
                visible:true ,
              }
            },
            advanced: {
              margin: {
                fieldLabel: "margin",
                type:"number" 
              },
              padding: {
                fieldLabel: "padding",
                type:"number" 
              },
              cssID: {
                fieldLabel: "cssID",
                type:"text" 
              },
              cssClasses: {
                fieldLabel: "cssClasses",
                type:"text" 
              }
            },
          }

          box = {
            elements : [
              {
                layout: {
                  columns : 1,
                },
                head: {
                  top: {
                  image: "",
                  icon: ""
                  },
                },
                text: {
                    h3: "",
                    p: ""
                  }
                }
              ]
            }

          element = {
            layout: {
              columns : {
                fieldLabel: "columns",
                type:"number" ,
                visible:true ,
              }
            },
            head: {
              top: {
                fieldLabel: "head",
                type:"select" ,
                typeOption:"image,icon"
              }
            },
            text: {
              h3: {
                fieldLabel: "h3",
                type:"text" 
              },
              p: {
                fieldLabel: "p",
                type:"text" 
              }
            },
          }
        

          generateTheme ={ 
            sections:[
            ],
              }
    
  render() {
console.log(Icon)
    const landingPage = {
        margin: '0',
        padding: '0'
      };
      
    const postBox = {
        margin: '0', 
        padding: '0',
        marginTop: '1em'
      };

    const  hrBorder = {
      margin: '0em 25em',
      borderColor: 'grey',
      marginTop: '2em'
    }

    const android = <Icon.FaAndroid size='120' className="Icon" />
    const github = <Icon.FaGithubAlt size='120' className="Icon" />
    const paw = <Icon.FaPaw size='120' className="Icon" />

    const columns = [
      {
        icon: android,
        title: "Lorem ipsum",
        text: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"
      },
      {
        icon: github,
        title: "Nam liber",
        text: "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      },
      {
        icon: paw,
        title: "Duis autem",
        text: "Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
      }
    ]
    

 

    return (
      <Container style={landingPage} fluid>
        <Navbar className="Navbar" dark expand="md">
          <NavbarBrand href="/">KinoView</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        
        <Jumbotron fluid className="Jumbotron">
            <Container fluid>
            <h1 className="display-3">Welcome to the LandingPage</h1>
            <p className="lead">React CMS !</p>
            </Container>
        </Jumbotron>

        {/* <Row style={landingPage}>
          <Col className="Box">
            <Icon.FaAndroid size='120' className="Icon" />
            <h3>Lorem ipsum</h3>
            <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </Col>
          <Col className="Box">
            <Icon.FaGithubAlt size='120' className="Icon" />
            <h3>Nam liber</h3>
            <p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
          </Col>
          <Col className="Box">
            <Icon.FaPaw size='120' className="Icon" />
            <h3>Duis autem</h3>
            <p>Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
          </Col>
    </Row> */}

   
        <Row style={landingPage}> 
          {columns.map(column => {
            console.log(column)
            return(
              <Col className="Box">
                {column.icon}
                <h3>{column.title}</h3>
                <p>{column.text}</p>
               </Col>  
            )
          })}      
        </Row>       
 
        <hr style={hrBorder}/>
        <Row style={postBox} className="text-center">
            <Col sm="8">
              <h3>Duis autem</h3>
              <p>Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </Col>
            <Col sm="4">
            <img src={require('./image/tool.jpg')} />
            </Col>
        </Row>

        <hr style={hrBorder}/>
        <Row style={postBox} className="text-center">
            <Col sm="4">
              <img src={require('./image/ananas.jpg')} />
            </Col>
            <Col sm="8">
              <h3>Duis autem</h3>
              <p>Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </Col>
        </Row>

        <footer >
          <p>Consectetuer</p>
        </footer>

      </Container>
    );
  }
}

export default LandingPage;
