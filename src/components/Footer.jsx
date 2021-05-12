import React from 'react';

const Footer = () => {
  return (
    <footer className="footer text-lg-start fixed-bottom">
    <div className="text-center p-3" >
      <p>© {new Date().getFullYear()} Iron Horse Studio</p>
    </div>
  </footer>
  )
}

export default Footer;