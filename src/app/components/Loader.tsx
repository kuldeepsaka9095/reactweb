import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <div className='d-flex h-100 loader'>
         <Spinner animation="border" role="status" variant="light" size="lg">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
  )
}

export default Loader