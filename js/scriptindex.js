var bar = document.querySelectorAll(".bar");
var hamburgersection = document.querySelector("#hamburger_section");
hamburgersection.onmouseover = function () {
    for (let j = 0; j < 3; j++) {
        bar[j].style.height = "4px";
        bar[j].style.width = "30px";
    }
};
hamburgersection.onmouseout = function () {
    for (let j = 0; j < 3; j++) {
        bar[j].style.height = "3px";
        bar[j].style.width = "25px";
    }
};

var div2=document.querySelector('#div2');
hamburgersection.addEventListener('click',()=>{
    hamburgersection.classList.toggle('active');
    div2.classList.toggle('active');
})






// var navbar = document.querySelector("#nav_bar");
// var navitem = document.querySelectorAll(".nav_item");
// var navitemlist = document.querySelectorAll(".nav_item_list");


// for (let i = 0; i < navitem.length; i++) {
//     navitemlist[i].onmouseover = function () {
//         navitem[i].style.color = "white";
//     };
//     navitemlist[i].onmouseout = function () {
//         navitem[i].style.color = "#c8c8c8";
//     };
// }
// navbar.onmouseover = function () {
//     for (let j = 0; j < navitem.length; j++) {
//         navitem[j].style.color = "#c8c8c8";
//     }
// };
// navbar.onmouseout = function () {
//     navbar.style.color = "black";
//     for (let j = 0; j < navitem.length; j++) {
//         navitem[j].style.color = "black";
//     }
// };