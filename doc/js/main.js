const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


//Typing animation
var typed = new Typed(".typing", {
    strings: ["Create", "Innovate", "Build", "Work together"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

const clc = document.querySelector(".cancel");
const arr = document.querySelector(".arr_container");
const left_container = document.querySelector(".left_container");

arr.addEventListener("click", () => {
    arr.classList.add("active_arr");
    if (left_container.classList.contains("off")) {
        left_container.classList.remove("off");
        left_container.classList.add("active");
    }
});
clc.addEventListener("click", () => {
    arr.classList.remove("active_arr");
    if (left_container.classList.contains("active")) {
        left_container.classList.remove("active");
        left_container.classList.add("off");
    }
});

const dld = document.querySelector(".cancel_one");
const abb = document.querySelector(".arr_container_one");
const left_container_one = document.querySelector(".left_container_one");

abb.addEventListener("click", () => {
    abb.classList.add("active_arr");
    if (left_container_one.classList.contains("off")) {
        left_container_one.classList.remove("off");
        left_container_one.classList.add("active");
    }
});
dld.addEventListener("click", () => {
    abb.classList.remove("active_arr");
    if (left_container_one.classList.contains("active")) {
        left_container_one.classList.remove("active");
        left_container_one.classList.add("off");
    }
});

const ele = document.querySelector(".cancel_two");
const acc = document.querySelector(".arr_container_two");
const left_container_two = document.querySelector(".left_container_two");

acc.addEventListener("click", () => {
    acc.classList.add("active_arr");
    if (left_container_two.classList.contains("off")) {
        left_container_two.classList.remove("off");
        left_container_two.classList.add("active");
    }
});
ele.addEventListener("click", () => {
    acc.classList.remove("active_arr");
    if (left_container_two.classList.contains("active")) {
        left_container_two.classList.remove("active");
        left_container_two.classList.add("off");
    }
});

const flf = document.querySelector(".cancel_three");
const aee = document.querySelector(".arr_container_three");
const left_container_three = document.querySelector(".left_container_three");

aee.addEventListener("click", () => {
    aee.classList.add("active_arr");
    if (left_container_three.classList.contains("off")) {
        left_container_three.classList.remove("off");
        left_container_three.classList.add("active");
    }
});
flf.addEventListener("click", () => {
    aee.classList.remove("active_arr");
    if (left_container_three.classList.contains("active")) {
        left_container_three.classList.remove("active");
        left_container_three.classList.add("off");
    }
});

const glg = document.querySelector(".cancel_four");
const aff = document.querySelector(".arr_container_four");
const left_container_four = document.querySelector(".left_container_four");

aff.addEventListener("click", () => {
    aff.classList.add("active_arr");
    if (left_container_four.classList.contains("off")) {
        left_container_four.classList.remove("off");
        left_container_four.classList.add("active");
    }
});
glg.addEventListener("click", () => {
    aff.classList.remove("active_arr");
    if (left_container_four.classList.contains("active")) {
        left_container_four.classList.remove("active");
        left_container_four.classList.add("off");
    }
});