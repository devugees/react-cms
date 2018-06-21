import React, { Component } from 'react';
import image1 from './img/1.jpeg'
import image2 from './img/2.jpeg'
import image3 from './img/3.jpeg'
import kino from './img/kino.jpg'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';



class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      items :[],


      activeIndex: 0 
    }
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  componentWillMount() {
    fetch('http://localhost:5000/api/appearance')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          items: [
            data[0].slide1, 
            data[0].slide2,  
            data[0].slide3, 
            data[0].slide4
        ],
        });
      })
      .catch(() => {
        console.log(
          'No internet connection found. App is running in offline mode.'
        );
      });
  }
  
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = this.state.items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        > 
      
          <img 
               style={{height: '500px', marginTop: 0, marginBottom: 30}}
               src={item.picture} 
               alt={item.altText}
                 />
         
          <CarouselCaption captionText={item.text} captionHeader={item.title} style={{display: 'block'}} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={this.state.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default Slider;