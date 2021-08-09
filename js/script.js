"use strict"

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