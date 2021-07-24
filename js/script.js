"restrict"


const tst = "125.25qwerty777";
console.log(parseInt(tst));
console.log(parseFloat(tst));

const num = Math.round((Math.random()*100)).toString();
alert(num);

console.log(substring(prompt("Enter u name"),0,3));
console.log(prompt("Enter word").substring(0,3));

showFirstMessage("Before func");
// создаётся в первую очередь до начала обработки остального скрипта
// можно вызвать до объявления!
function showFirstMessage(Text){
    console.log(Text)
}

function substring(Text,a,b){
    return Text.slice(a,b);
}

showFirstMessage(prompt("Enter anything",""));

//functional expression - создаётся тогда когда обработчик дойдёт до её вызова
const someValue = function(){
    console.log("This is SomeValue");};

someValue();

//стрелочная функция - аналог лямбда-выражения Java для func.expression
const anotherFunc = (a,b) => a*b;

console.log(anotherFunc(9,5));



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

//  const numberOfFilms = prompt("How much films u are was seen?","");

// const personalMovieDB = {
// count : numberOfFilms,
// movies : {},
// actors : {},
// genres : [],
// privat : false
// }; 

// for(let i=0;i<2;i++){
// const a = prompt("One of last seen films?",""),
//       b = prompt("How many points do u rate?","");
//  if(a!=null && b!= null && a != '' && b != '')
//       {personalMovieDB.movies[a] = b;    
//         console.log('done');}
//     else
//    {console.log('error');
//        i--;}
//     }
// // personalMovieDB[c] = d;

//  console.log(personalMovieDB);

// let num = 0;// +prompt("Enter number, please","");

// (num%2===0) ? alert("Четное") : alert("Нечетное") ;

// while(num!=33){
//     num = +prompt("Enter number, please","");
//     if (num!=33)
//     {alert("Wrong number");}
//     else
//     {alert("U are lucky");}

// }
