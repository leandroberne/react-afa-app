import React from 'react';
import './Spinner.css';

const Spinner = () => {
  return (
    <div id='Spinner' className='d-flex justify-content-center'>
      <div className='spinner-border text-white' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
