// Designed by:  Mauricio Bucardo
// Original image:
// https://dribbble.com/shots/5619509-Animated-Tab-Bar

"use strict"; 

const body = document.body;
const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
const menuBorder = menu.querySelector(".menu__border");
let activeItem = menu.querySelector(".active");

function clickItem(item, index) {

    menu.style.removeProperty("--timeOut");
    
    if (activeItem == item) return;
    
    if (activeItem) {
        activeItem.classList.remove("active");
    }

    
    item.classList.add("active");
    body.style.backgroundColor = bgColorsBody[index];
    activeItem = item;
    offsetMenuBorder(activeItem, menuBorder);
    
    
}

function offsetMenuBorder(element, menuBorder) {

    const offsetActiveItem = element.getBoundingClientRect();
    const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2) +  "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;

}

offsetMenuBorder(activeItem, menuBorder);

menuItems.forEach((item, index) => {

    item.addEventListener("click", () => clickItem(item, index));
})

window.addEventListener("resize", () => {
    offsetMenuBorder(activeItem, menuBorder);
    menu.style.setProperty("--timeOut", "none");
});


const blockItem = document.querySelector("#block1");
const blockItem2 = document.querySelector("#block2");
const blockItem3 = document.querySelector("#block3");
const blockItem4 = document.querySelector("#block4");
const blockItem5 = document.querySelector("#block5");

const blockBtn = document.querySelector("#btn1");
const blockBtn2 = document.querySelector("#btn2");
const blockBtn3 = document.querySelector("#btn3");
const blockBtn4 = document.querySelector("#btn4");
const blockBtn5 = document.querySelector("#btn5");

blockBtn.addEventListener("click", () => {
    blockItem.classList.add("main-block");
    blockItem2.classList.remove("active-block");
    blockItem3.classList.remove("active-block");
    blockItem4.classList.remove("active-block");
    blockItem5.classList.remove("active-block");
});

blockBtn2.addEventListener("click", () => {
    blockItem2.classList.add("active-block");
    blockItem.classList.remove("main-block");
    blockItem3.classList.remove("active-block");
    blockItem4.classList.remove("active-block");
    blockItem5.classList.remove("active-block");
});

blockBtn3.addEventListener("click", () => {
    blockItem3.classList.add("active-block");
    blockItem.classList.remove("main-block");
    blockItem2.classList.remove("active-block");
    blockItem4.classList.remove("active-block");
    blockItem5.classList.remove("active-block");
});

blockBtn4.addEventListener("click", () => {
    blockItem4.classList.add("active-block");
    blockItem.classList.remove("main-block");
    blockItem2.classList.remove("active-block");
    blockItem3.classList.remove("active-block");
    blockItem5.classList.remove("active-block");
});

blockBtn5.addEventListener("click", () => {
    blockItem5.classList.add("active-block");
    blockItem.classList.remove("main-block");
    blockItem2.classList.remove("active-block");
    blockItem3.classList.remove("active-block");
    blockItem4.classList.remove("active-block");
});


