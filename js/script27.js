"use strict";

const box = document.querySelector('.tabcontent'),
      btn = document.querySelector('.tabheader__item');

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);

btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px';
});

console.log(box.getBoundingClientRect());

const style = window.getComputedStyle(box);

console.log(style.display);