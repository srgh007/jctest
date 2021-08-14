/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

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

const reklama = document.querySelectorAll(".promo__adv img"),
zagolovok = document.querySelectorAll(`.promo__adv-title`),
promo = document.querySelector(`.promo__bg`),
genre = promo.querySelector(`.promo__genre`),
films = document.querySelector(`.promo__interactive-list`),
searchLine = document.querySelector('.header__search');
// const img = reklama.querySelectorAll(`.img`);
// console.log(reklama.length);
reklama.forEach(item => {item.remove();});
zagolovok.forEach(item => {item.remove();});
//console.log(genre[0]);
// genre[0].innerHTML = `<h1>ДРАМА</h1>`;
genre.textContent = `драма`;
promo.style.backgroundImage = 'url("img/lap.jpg")';
// console.log(promo.innerHTML);



// function filmRemove(filmName){
// movieDB.movies.forEach(Item => {
//     console.log(filmName);
// if(Item.toUpperCase==filmName.toUpperCase){
//     delete;
//     console.log(movieDB.movies);
// }
// });    
// }
filmsRefresh(films,movieDB.movies);

function filmRemove(filmName){
  for (let i = 0;i<movieDB.movies.length;i++){
     let str = filmName.toString();
     str = str.toUpperCase();
     const tmp = movieDB.movies[i].toString().toUpperCase();
     console.log(str);
     console.log(tmp);
       if(str.toString().indexOf(tmp.toString())==0){
           console.log('Удаление');
        if(i+1!=movieDB.movies.length){
           console.log(movieDB.movies.splice(i,1));}
           else
           {console.log(movieDB.movies.pop());}
            break;
       }
  }       
  console.log(movieDB.movies);
  filmsRefresh(films,movieDB.movies);
}


// console.log(searchLine.innerHTML);
// searchLine.style.placeholder = "Найти";

searchLine.innerHTML =
`<form action="#">
<input type="text" placeholder="Найти">
</form>`;
/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

// const searher = document.querySelector('.header__search');
// const addElements = document.querySelector('.adding__input');
const searher = document.querySelector('.add button');
const addForm = document.querySelector("form.add"),
      addInput = addForm.querySelector('.adding__input'),
      addButton = addForm.querySelector("button"),
      chckbx = addForm.querySelector("[type='checkbox']"),
      delItem = document.querySelectorAll(".delete");
// const txtInput = document.querySelector('.add input[type="text"]');

// console.log(addElements.textContent);
function filmsRefresh(filmsElement,movie){
    filmsElement.innerHTML = "";
    movie.sort();
    movie.forEach((film,i) => {
     filmsElement.innerHTML += `<li class="promo__interactive-item">${film}
    <div class="delete"></div>
    </li>`; 
    });
    let delItem2 = document.querySelectorAll(".delete");
    delItem2.forEach((Item) => Item.addEventListener(`click`,delFilm));
    }


const addFilm = (e) =>  {
    e.preventDefault();
    console.log(addInput.value);
    if(addInput.value){
    movieDB.movies.push(addInput.value);
    filmsRefresh(films,movieDB.movies);
    if(chckbx.checked){
    console.log('Добавляется любимый фильм');}
    }
    // addElements[0].textContent = '123';
    // console.log(addElements[0]);
};
addButton.addEventListener('click', addFilm);


 function delFilm (e, filmsRefresh) {
    // e.preventDefault();
    // console.log(e.target);
    // console.log(e.target.parentElement.textContent);
    filmRemove(e.target.parentElement.textContent);
    // filmsRefresh();
}

delItem.forEach((btn,i) => {
    btn.addEventListener(`click`,() => {
    btn.parentElement.remove();
    movieDB.movies.splice(i,1);
    });});




//films.forEach(item => {item.textContent = });
// for(let i=0;i<films.length;i++){
//     films[i].textContent=movieDB.movies[i];
// }
});