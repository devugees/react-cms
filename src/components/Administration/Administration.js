import React, { Component } from 'react';
import TopHeader from '../HeaderComponent/HeaderComponent';
import Main from '../Main/Main';
import './Administration.css';


class Administration extends Component {
  render() {
    return (
      <div className='Administration'>
       <TopHeader />
        <div className='Dashboard'>
          Dashboard
        </div>
        <Main />
      </div>
    );
  }
}

export default Administration;
