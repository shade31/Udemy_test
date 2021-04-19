"use strict";

const reklama = document.querySelector('.promo__adv'),
      genre = document.querySelector('.promo__genre'),
      bg = document.querySelector('.promo__content');


reklama.remove();

genre.textContent = "Драма";

bg.style.cssText = `background: url(img/bg.png)`