import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Menu from './LayoutComponents/Menu';
import Slider from '../Slider/Slider';
import IconBox from './LayoutComponents/IconBox';
import Post from './LayoutComponents/Post';
import Footer from './LayoutComponents/Footer';
import LayoutComponents from './LayoutComponents/LayoutComponents';
import SubLanding from './SubLanding'


import './LandingPage.css';

class LandingPage extends Component {
  state = {

    contentTypesView:[],
    form: '',
    
  }

  componentWillMount() {
    fetch('http://localhost:5000/api/appearance')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          form: data[0],
          icons: [data[0].icon1, data[0].icon2, data[0].icon3],
          contentTypesView: data[0].contentTypesView
        });
      })
      .catch(() => {
        console.log(
          'No internet connection found. App is running in offline mode.'
        );
      });
      fetch('http://localhost:5000/api/customcode')
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.setState({
          javascriptCode: data[0].javascriptCode,
          cssCode: data[0].cssCode
        });
        
      })
      .catch(() => {
        console.log(
          'No internet connection found. App is running in offline mode.'
        );
      });
  }
  render() {
  console.log("this.props.match.params",this.props.match.params)
    return (
      <React.Fragment>
      <style>
      {this.state.cssCode}
      </style>
        <Menu logo={this.state.form.logopicture} />
       <SubLanding link={this.props.match.params} icon={this.state.icons}
                  contentTypes={this.state.contentTypesView}/>
        <Footer />
        <script type="text/javascript">
        {this.state.javascriptCode}
        </script>

      </React.Fragment>
    );
  }
}

export default LandingPage;
