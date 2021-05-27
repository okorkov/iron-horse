import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

function adjustImages() {
  let images = document.querySelectorAll('img')
  images.forEach(img => {
    if(img.className === ""){
      img.style = ""
      img.className = "img-gallery"
    }
  })
}

document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
    adjustImages();
      if (window.scrollY > 240) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        document.getElementById('navbar_top').style.backgroundColor = '#0c0c0c';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
        document.getElementById('navbar_top').style.backgroundColor = 'inherit';
      } 
  });
}); 



