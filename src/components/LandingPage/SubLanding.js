import React from 'react';
import {Container,Row} from 'reactstrap';
import Menu from './LayoutComponents/Menu';
import Slider from '../Slider/Slider';
import IconBox from './LayoutComponents/IconBox';
import Post from './LayoutComponents/Post';
import Footer from './LayoutComponents/Footer';
import LayoutComponents from './LayoutComponents/LayoutComponents';
import ExtandedCTView from './LayoutComponents/ExtandedCTView';


class SubLanding extends React.Component {
	
render() {
	let urlParams = this.props.link.entrieId;

	if (urlParams) {
		return <ExtandedCTView id={urlParams}/>
	}else {
		return (
				<div>
			        <Slider />
			        <Container>
			          <IconBox icons={this.props.icons} />
			        </Container>

			        
			          <Container style={{maxWidth:"100vw"}}>
			            {this.props.contentTypes.map((content, index) => {
			              console.log('here', content);
			              return  <LayoutComponents key={index} contentType={content} />;
			            })}
			          </Container>
			      
				</div>
			);
	}
		
	}
}

export default SubLanding;
