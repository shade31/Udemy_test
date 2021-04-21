"use strict";

document.addEventListener('DOMContentLoaded', () => {

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
          films = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = document.querySelector('.adding__input'),
          checkbox = document.querySelector('[type="checkbox"]');
        //   btn = document.querySelector('button');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, films);
        }

        
        event.target.reset();
    });
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    }
    
    // reklama.remove(); //owibka

    const makeChanges = () => {
        genre.textContent = "Драма";
    
        bg.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    movieDB.movies.sort();

    function createMovieList(filmss, parent) {
        parent.innerHTML = "";
        sortArr(filmss);
        
        filmss.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(filmss, parent);
            });
        });
    }


    deleteAdv(reklama);
    makeChanges();
    createMovieList(movieDB.movies, films);
});