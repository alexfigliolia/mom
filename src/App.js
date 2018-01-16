import React, { Component } from 'react';
import PageSwitch from 'pageswitch';
import Slide1 from './components/Slide1/Slide1';
import Slide2 from './components/Slide2/Slide2';
import Slide3 from './components/Slide3/Slide3';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null
    }
    this.pw = null;
    this.colors = [
      'linear-gradient(to right, #ff9966, #ff5e62)',
      'linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b)',
      'linear-gradient(to right, #43c6ac, #f8ffae)', 
      'linear-gradient(to right, #3494e6, #ec6ead)',
    ];
  }

  componentDidMount() {
    this.pw = new PageSwitch('switcher',{
      duration:600,
      direction:1,
      start:0,
      loop:false,
      ease:'ease',
      transition:'slide',
      freeze:false,
      mouse:true,
      mousewheel:true,
      arrowkey:true,
      autoplay:false,
    });
    this.pw.on('before', (index, prev) => {
    });
    this.pw.on('after', (index) => {
      this.setState({ activeIndex: index });
    });
    setTimeout(() => {
      this.setState({ activeIndex: 0 });
    }, 1000);
  }

  render = () => {
    return (
      <div className="App" style={{height: window.innerHeight}}>
        <div id='switcher'>
          <Slide2 
            color={this.colors[1]}
            activeIndex={this.state.activeIndex}
            index={0} />
          <Slide1 
            text1='Happy'
            text2='Birthday'
            color={this.colors[0]}
            activeIndex={this.state.activeIndex}
            index={1}
            classes={this.state.activeIndex === 1 ? 'slide1 slide1-show' : 'slide1'} />
          <Slide3 
            color={this.colors[3]}
            activeIndex={this.state.activeIndex}
            index={2}
            classes={this.state.activeIndex === 2 ? 'slide3 slide3-show' : 'slide3'} />
          <Slide1 
            text1='Alex'
            text2=''
            color={this.colors[2]}
            activeIndex={this.state.activeIndex}
            index={3}
            classes={this.state.activeIndex === 3 ? 'slide1 slide1-show' : 'slide1'} />
        </div>
      </div>
    );
  }
}
