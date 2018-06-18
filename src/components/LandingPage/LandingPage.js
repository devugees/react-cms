import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Menu from './LayoutComponents/Menu';
import Slider from '../Slider/Slider';
import IconBox from './LayoutComponents/IconBox';
import Post from './LayoutComponents/Post';
import Footer from './LayoutComponents/Footer';
import LayoutComponents from './LayoutComponents/LayoutComponents';


import './LandingPage.css';

class LandingPage extends Component {
  state = {
    form: '',
    contentTypes: [
      {
        contentType: {
          id: '5b0202dc93aec4148ef87ea1',
          name: 'Posts-test'
        },
        fields: [
          {
            key: 'image',
            element: 'img'
          },
              {
                key: 'title',
                element: 'h'
              },
          {
            key: 'body',
            element: 'p'
          },
        ],
        numperOfPosts: 4,
        viewType: 'Grid',
        columns: 3
      },
      {
        contentType: {
          id: '5b0202dc93aec4148ef87ea1',
          name: 'Posts-test'
        },
        fields: [
          {
            key: 'image',
            element: 'img'
          },
          {
            key: 'title',
            element: 'h'
          },
          {
            key: 'body',
            element: 'p'
          },
        ],
        numperOfPosts: 4,
        viewType: 'Grid',
        columns: 3
      },
      {
        contentType: {
          id: '5b0202dc93aec4148ef87ea1',
          name: 'Posts-test'
        },
        fields: [
          {
            key: 'image',
            element: 'img'
          },
          {
            key: 'title',
            element: 'h'
          },
          {
            key: 'body',
            element: 'p'
          },
        ],
        numperOfPosts: 4,
        viewType: 'Grid',
        columns: 3
      }
    ],
    javascriptCode:"",
    cssCode:"",
  };

/*
  theme = {
    sections: [
      {
        layout: {
          columns: 1
        },
        style: {
          background: {
            image: '',
            color: '',
            video: ''
          }
        },
        advanced: {
          margin: '',
          padding: '',
          cssID: '',
          cssClasses: ''
        }
      }
    ]
  };

  section = {
    layout: {
      columns: {
        fieldLabel: 'columns',
        type: 'number',
        visible: true
      }
    },
    style: {
      background: {
        fieldLabel: 'background',
        type: 'select',
        typeOption: 'image,color,video',
        visible: true
      }
    },
    advanced: {
      margin: {
        fieldLabel: 'margin',
        type: 'number'
      },
      padding: {
        fieldLabel: 'padding',
        type: 'number'
      },
      cssID: {
        fieldLabel: 'cssID',
        type: 'text'
      },
      cssClasses: {
        fieldLabel: 'cssClasses',
        type: 'text'
      }
    }
  };

  box = {
    elements: [
      {
        layout: {
          columns: 1
        },
        head: {
          top: {
            image: '',
            icon: ''
          }
        },
        text: {
          h3: '',
          p: ''
        }
      }
    ]
  };

  element = {
    layout: {
      columns: {
        fieldLabel: 'columns',
        type: 'number',
        visible: true
      }
    },
    head: {
      top: {
        fieldLabel: 'head',
        type: 'select',
        typeOption: 'image,icon'
      }
    },
    text: {
      h3: {
        fieldLabel: 'h3',
        type: 'text'
      },
      p: {
        fieldLabel: 'p',
        type: 'text'
      }
    }
  };

  generateTheme = {
    sections: []
  };

*/

  componentWillMount() {
    fetch('http://localhost:5000/api/appearance')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          form: data[0],
          icons: [data[0].icon1, data[0].icon2, data[0].icon3]
        });
      })
      .catch(() => {
        console.log(
          'No internet connection found. App is running in offline mode.'
        );
      });
  }
  render() {
    return (
      <React.Fragment>
      <style>
      {this.state.cssCode}
      </style>
        <Menu />
        <Slider />
        <Container>
          <IconBox icons={this.state.icons} />
        </Container>

        <div className="py-5 bg-light">
          <Container>
            {this.state.contentTypes.map((content, index) => {
              console.log('here', content);
              return <LayoutComponents key={index} contentType={content} />;
            })}
          </Container>
        </div>
        <Footer />
        <script type="text/javascript">
        {this.state.javascriptCode}
        </script>

      </React.Fragment>
    );
  }
}

export default LandingPage;
