let time = 5000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#container img"),
    max = images.length;

function nextImage() {
    images[currentImageIndex].classList.remove("selected")

    currentImageIndex++

    if (currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex].classList.add("selected")
};

function start() {
    setInterval(() => {
        nextImage()
    }, time)
};

window.addEventListener("load", start);


//sidebar
const openmenu = document.getElementById("open-menu");
const closemenu = document.getElementById("close-menu");
const sidebar = document.getElementById("sidebar");

openmenu.addEventListener("click", function() {
    sidebar.style.left = "50px";
    openmenu.style.opacity = "0";
});

closemenu.addEventListener("click", function() {
    sidebar.style.left = "-300px";
    openmenu.style.opacity = "1";
});



//menus
function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    const menus = document.querySelectorAll('.menu-popup');

    menus.forEach(function (m) {
        if (m !== menu) {
            m.style.display = 'none'; // Fecha todos os outros menus
        }
    });

    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}



//fecha todos os menus
function closeAllMenus() {
    const menus = document.querySelectorAll('.menu-popup');

    menus.forEach(function (menu) {
        menu.style.display = 'none';
    });
}