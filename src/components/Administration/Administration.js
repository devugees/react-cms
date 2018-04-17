import React, { Component } from 'react';
import TopHeader from '../HeaderComponent/HeaderComponent';
import Dashboard from '../dashBoard/dashBoard';
import './Administration.css';
import DashBoard from '../dashBoard/dashBoard';



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
