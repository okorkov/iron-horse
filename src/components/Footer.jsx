import React from 'react';
import Package from '../../package.json'


const Footer = () => {
  return (
    <footer className="text-lg-start ">
    <div className="text-center p-3" >
      <p>© {new Date().getFullYear()} Iron Horse Studio</p>
      <p>Version {Package.version}</p>
    </div>
  </footer>
  )
}

export default Footer;