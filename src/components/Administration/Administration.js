import React, { Component } from 'react';
import TopHeader from '../HeaderComponent/HeaderComponent';
import Dashboard from '../dashBoard/dashBoard';
import './Administration.css';


class Administration extends Component {
  render() {
    return (
      <div className='Administration'>
       <TopHeader />
        <div className='Dashboard'>
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default Administration;
