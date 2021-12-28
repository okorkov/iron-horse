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

// canvas

const img = new Image();

img.src =
	"/header.jpeg";
let CanvasXSize = 1000;
let CanvasYSize = 2000;
let speed = 40; //lower is faster
let scale = 1.3;
let y = -500; //vertical offset

// Main program

let dx = 0.75;
let imgW;
let imgH;
let x = 0;
let clearX;
let clearY;
let ctx;

img.onload = function () {
	imgW = img.width * scale;
	imgH = img.height * scale;
	if (imgW > CanvasXSize) {
		x = CanvasXSize - imgW;
	} // image larger than canvas
	if (imgW > CanvasXSize) {
		clearX = imgW;
	} // image larger than canvas
	else {
		clearX = CanvasXSize;
	}
	if (imgH > CanvasYSize) {
		clearY = imgH;
	} // image larger than canvas
	else {
		clearY = CanvasYSize;
	}
	//Get Canvas Element
	ctx = document.querySelector("#canvas").getContext("2d");
	//Set Refresh Rate
	return setInterval(draw, speed);
};

function draw() {
	let start = true
	//Clear Canvas
	ctx.clearRect(0, 0, clearX, clearY);
	ctx.drawImage(img, x + 1200, y, imgW, imgH - 112);
	//If image is <= Canvas Size
	if (imgW <= CanvasXSize) {
		//reset, start from beginning
		if (x > CanvasXSize) {
			x = 0;
		}
		//draw additional image
		if (x > CanvasXSize - imgW) {
			ctx.drawImage(img, x - CanvasXSize + 1, y, imgW + 300, imgH);
		}
	}
	//If image is > Canvas Size
	else {
		//reset, start from beginning
		if (x > CanvasXSize) {
			x = CanvasXSize - imgW;
		}
		//draw additional image
		if (x > CanvasXSize - imgW) {
			ctx.drawImage(img, x - 1400, y, imgW, imgH - 160);
		}
	}
	//draw image
	if(start) {
		ctx.drawImage(img, x + 800, y, imgW, imgH);
		start = false;
	} else {
		ctx.drawImage(img, x , y, imgW, imgH);
	}
	//amount to move
	x += dx;
}