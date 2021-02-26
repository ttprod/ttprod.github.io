const menuBtn = document.querySelector("#menu-icon");
const dropDown = document.querySelector(".dropdown-menu");
const icon = document.querySelector("#icon");
const menuWrapper = document.querySelector(".dropdown-menu-wrapper");
const navLink = document.querySelectorAll(".link-sm");


menuBtn.addEventListener('click', () => {
    if (!dropDown.classList.contains("active")) {
        dropDown.classList.add("active");
        icon.style.transform = "rotate(90deg)";
    }
    else if (dropDown.classList.contains("active")) {
        dropDown.classList.remove("active");
        icon.style.transform = "rotate(0deg)";
    }
});

for(var i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', () => {
        dropDown.classList.remove("active");
        icon.style.transform = "rotate(0deg)";
    });
}

window.addEventListener('click', function (e) {
    if (!dropDown.contains(e.target) && !menuBtn.contains(e.target)) {
        dropDown.classList.remove("active");
        icon.style.transform = "rotate(0deg)";
    }
});