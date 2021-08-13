"use strict"
// удобный способ объявить все элементы
const   box = document.getElementById(`box`),
        btns = document.getElementsByTagName(`button`),
        wrapper = document.querySelector(`.wrapper`),
        circles = document.getElementsByClassName(`circle`),
        hearts = wrapper.querySelectorAll(`.heart`);
console.log(box);
// console.dir(box);

console.log(btns[2]);
console.log(circles); 
hearts.forEach(e => {console.log(e);});

box.style.backgroundColor = `blue`;
box.style.width = `500px`;
box.style.height = `500px`;

btns[1].style.borderRadius = `50%`;
let width = 100;
let height = 100;
box.style.cssText = `background-color: blue; width: ${width}px; height: ${height}px;`;

// for(let i = 0;i<hearts.length;i++){
//     hearts[i].style.backgroundColor = `black`;
// }

hearts.forEach(item => {item.style.backgroundColor=`green`;});
// const text = document.createTextNode(`Its Text from node`);

let div = document.createElement('div');
div.classList.add("myDiv");
// let text = document.createTextNode('Test');
// div.appendChild(text);
// document.body.appendChild(div);
document.body.append(div);
// document.querySelector(`.wrapper`).prepend(div);
//hearts[0].after(div);

function myFunc() {
    let  newElem = document.createElement( "button" ); // создаем новый элемент <button>
    const text = document.createTextNode( "Mybutton" ); // создаем текстовое содержимое
    newElem.appendChild( text ); // добавляем текстовое содержимое элементу <button>                     
    document.body.appendChild( newElem );  // добавляем наш элемент в элемент <body>
    // hearts[0].after(newElem);
}

// circles[0].remove();
// hearts[0].replaceWith(circles[0]);

circles[1].innerHTML = `<h1>Hello</h1>`;
// circles[1].textContent = `vbnvnvn`;
circles[0].insertAdjacentHTML("beforebegin",`<h1>Hi</h1>`);

  myFunc();

const obj = {
    numOfbook:5,
    otvet:0,
    privat:false,
    toggle: function(){
        if(this.privat)
        {this.privat=false;}
        else
        {this.privat=true;}
    },
    showPrivat:function(){
        console.log(this.privat);
    },
    writeNumbers:function(){
        let sumVal = 0;
        const nums = prompt(`Write some numbers`);
        const numsArr = nums.split(',');
        for(let val of numsArr){
            sumVal += parseInt(val);
        }
        this.otvet=sumVal;
    },
    showAnswer:function(){
        const out = this.otvet;
        console.log(`Ответ = ${out}`);
    }
};

function Hello(){
    console.log("Hello, world");
    // debugger;
}

Hello();

// const soldier = {
//     armor: 500,
//     strength: 300,
//     sayHello: function(){
//         console.log("Hi");
//     }
// };

// const morpech = Object.create(soldier);

// const letchik = {};

// Object.setPrototypeOf(letchik,soldier);

// letchik.sayHello();

// morpech.sayHello();

// function copy(objIn){
//     let objOut = {};
//     let key;
//     for(key in objIn){
//         objOut[key] = objIn[key];
//     }
//     return objOut;
// }

// const numbers = {
//     a:1,
//     b:7,
//     c:9,
//     d:{
//         x:55,
//         y:66,
//         z:77
//     }
// };

// const numbers2 = copy(numbers);
// const numbers3 = {...numbers,
// u:777};

// console.log(numbers);
// console.log(numbers2);
// console.log(numbers3);




// const arr = [11,23,15,7,14];

// // for (let val of arr){
// //     console.log(val);
// // }
// arr.sort(function(a,b){return (a-b);});

// console.log(arr);

// arr.forEach(function(item,i,arr){console.log(`${i} : ${item} in ${arr}`);});
// const obj = {
// width: 1024,
// height: 1024,
// colours: {
// border: 'black',
// bg: 'red'
// },
// someMethod: function(){
//     console.log('TEST');
// }
// };

// console.log(Object.keys(obj).length);
// obj.someMethod();

// const {} 

// console.log(obj['colours'].bg);
// console.log(obj.colours.border);

// delete obj.height

// console.log(obj)

// for(let key in obj){
//     // if(obj[key] == Object)
//     if(typeof(obj[key])!='object'){
//     console.log(key + " " + obj[key]);}
//     else{
//     console.log(key + ":");
//     // const obj2 = obj[key];
//     // for(let key2 in obj2){
//     //     console.log(key2 + " " + obj2[key2]);
//     for(let key2 in obj[key]){
//     console.log(key2 + " " + obj[key][key2]);
//     }    
//     }
    
// }