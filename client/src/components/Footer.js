import React from 'react'

const Footer = () => {
  const getYr = () => {
    const options = {
      year: 'numeric',
    }
    return new Date().toLocaleString('en-US', options)
  }
  return (
    <footer>
      <div>
        <h4>Contact us</h4>
        <p>Telephone: 123-123-1234</p>
        <p>Email: tsfbank@email.com</p>
      </div>
      <p className='copyright'>TSF Bank Copyright &copy; {getYr()}</p>
      <div>
        <h4>Address</h4>
        <p>212, Glory Complex,</p>
        <p>Near NM Highway,</p>
        <p>Bangaluru, India</p>
      </div>
    </footer>
  )
}

export default Footer
