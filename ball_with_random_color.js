//theis is exercise 12 solution 

console.log("script js initated");

// let boxes = document.getElementsByClassName("box");
let boxes = document.querySelector(".container").children   // ye sare child of container ka class ek hai es liyae
console.log(boxes);


function getrandomcolor(){
    let val1 = Math.ceil(0 + Math.random()*255);   // a + r(a-b) here a = 0, and r = random number  and b = 255
    let val2 = Math.ceil(0 + Math.random()*255);   //math.ceil()  // ye round off karega example 3.1 ko 4 me convert karega
    let val3 = Math.ceil(0 + Math.random()*255);   //math.floor()  // ye round off karega example 3.9 ko 3 me convert karega
    return `rgb(${val1}, ${val2}, ${val3})`;
}


Array.from(boxes).forEach(e=> {
    // console.log(e);
    e.style.backgroundColor = getrandomcolor();
    e.style.color = getrandomcolor();
})