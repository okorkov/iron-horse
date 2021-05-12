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


document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 240) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        document.getElementById('navbar_top').style.backgroundColor = 'black';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
        document.getElementById('navbar_top').style.backgroundColor = 'inherit';
      } 
  });
}); 

document.getElementsByClassName('_R2FsI')[0].addEventListener('click', (e) => {
  window.location.href = "#";
})