import React from 'react';

const Footer = () => {
  return (
    <footer className="text-lg-start ">
    <div className="text-center p-3" >
      <p>© {new Date().getFullYear()} Iron Horse Studio</p>
    </div>
  </footer>
  )
}

export default Footer;