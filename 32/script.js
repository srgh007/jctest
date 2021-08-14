

'use strict';
// console.log(document.body);
// console.log(document.body.childNodes);
// console.log(document.querySelector('#current').parentNode.parentNode);
// 
for (let node of document.body.childNodes){
    if(node.nodeName!="#text")
    {console.log(node);}
    // console.log(typeof(node)==`#text`);
}

