import React from 'react';

import './Spinner.styles.scss';

const Spinner:React.FC = () => (
  <div className='spinner-overlay'>
    <div className='spinner-container'/>
  </div>
);

export default Spinner;