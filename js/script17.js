"use strict";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const reklama = document.querySelectorAll('.promo__adv img'),
      bg = document.querySelector('.promo__bg'),     
      genre = bg.querySelector('.promo__genre'),
      films = document.querySelector('.promo__interactive-list');


reklama.forEach(item => {
    item.remove();
});

// reklama.remove(); //owibka

genre.textContent = "Драма";

bg.style.backgroundImage = 'url("img/bg.jpg")';

films.innerHTML = "";

movieDB.movies.sort();

console.log(bg.innerHTML);

movieDB.movies.forEach((film, i) => {
    films.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});