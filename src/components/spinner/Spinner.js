import React from 'react';
import Spinner from './spinner.gif';

export default () => {
	return(
      <div>
      	<img style={{width: '200px', margin: 'auto', display: 'block'}} src={Spinner} 
      	 alt="loaidng..." />
      </div>
	)
}