import React from 'react';
import Form from './Form';
import KontakKami from './KontakKami';
import Alamat from './Alamat';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <Form />
          </div>
          <div className="col-sm-4">
            <KontakKami />
            <Alamat />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
