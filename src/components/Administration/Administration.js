import React, { Component } from 'react';
import TopHeader from '../HeaderComponent/HeaderComponent';
import DashBoard from '../dashBoard/dashBoard';
import Main from '../Main/Main';
import './Administration.css';


class Administration extends Component {
  render() {
    return (
      <div className='Administration'>
       <TopHeader />
       <DashBoard />
       <Main activeLink={this.props.match.url}/>
      </div>
    );
  }
}

export default Administration;
