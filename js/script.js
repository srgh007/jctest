//  const result = confirm("Are you here?");
//  if(!result)
// {alert("I'm so sorry");}
// else
// {alert("Very good!")}

// const answer = prompt("Enter anything","");
// console.log(typeof(answer));

// const answers = [];
// answers[0] = prompt("Имя");
// answers[1] = prompt("Возраст");
// document.write(answers);

// const category = 'toys';
// console.log(`http://www.somesite.com/${category}/5`);

// const user = "Ivan";

// alert(`Привет,${user}`);

// const numberOfFilms = prompt("How much films u are was seen?","");

// const personalMovieDB = {
// count : numberOfFilms,
// movies : {},
// actors : {},
// genres : [],
// privat : false
// }; 

// const a = prompt("One of last seen films?",""),
//       b = prompt("How many points do u rate?",""),
//       c = prompt("One of last seen films?",""),
//       d = prompt("How many points do u rate?","");

// personalMovieDB[a] = b;
// personalMovieDB[c] = d;

// console.log(personalMovieDB);

let num = 0;// +prompt("Enter number, please","");

// (num%2===0) ? alert("Четное") : alert("Нечетное") ;

while(num!=33){
    num = +prompt("Enter number, please","");
    if (num!=33)
    alert("Wrong number");
    else
    alert("U are lucky");

}