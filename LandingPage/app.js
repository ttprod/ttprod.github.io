const menuBtn = document.querySelector("#menu-icon");
const dropDown = document.querySelector(".dropdown-menu");
const icon = document.querySelector("#icon");
const navLink = document.querySelectorAll(".link-sm");


menuBtn.addEventListener('click', () => {
    if (dropDown.style.display === "none") {
        dropDown.style.display = "block";
        icon.style.transform = "rotate(90deg)";
    } else {
        dropDown.style.display = "none";
        icon.style.transform = "rotate(0deg)";
    }
});

for(var i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', () => {
        dropDown.style.display = "none";
        icon.style.transform = "rotate(0deg)";
    });
}

window.addEventListener('click', function (e) {
    if (!dropDown.contains(e.target) && !menuBtn.contains(e.target)) {
        // Ниже код, который нужно выполнить при срабатывании события.
        dropDown.style.display = "none";
        icon.style.transform = "rotate(0deg)";
    }
});