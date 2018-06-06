import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Menu from './LayoutComponents/Menu';
import Slider from '../Slider/Slider';
import IconBox from './LayoutComponents/IconBox';
import Post from './LayoutComponents/Post';
import Footer from './LayoutComponents/Footer';
import './LandingPage.css';

class LandingPage extends Component {

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

    const landingPage = {
        margin: '0',
        padding: '0'
      };

    return (
      <Container style={landingPage} fluid>
        <Menu />
        <Slider />
        <IconBox />
        <Post />
        <Footer />
      </Container>
    );
  }
}

export default LandingPage;
