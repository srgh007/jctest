"restrict"

const obj = {
width: 1024,
height: 1024,
colours: {
border: 'black',
bg: 'red'
}
};

// console.log(obj['colours'].bg);
// console.log(obj.colours.border);

// delete obj.height

// console.log(obj)

for(let key in obj){
    // if(obj[key] == Object)
    if(typeof(obj[key])!='object'){
    console.log(key + " " + obj[key]);}
    else{
    console.log(key + ":");
    // const obj2 = obj[key];
    // for(let key2 in obj2){
    //     console.log(key2 + " " + obj2[key2]);
    for(let key2 in obj[key])
    console.log(key2 + " " + obj[key][key2]);
    }    
    }
    
}