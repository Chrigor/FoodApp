window.onload = function(){
    let $menu = document.getElementById("menu-hamburguer");
    let $close = document.getElementById("toggle-menu");
    $menu.addEventListener("click", clickMenu);
    $close.addEventListener("click", clickMenu);
}

function clickMenu(event){
    event.preventDefault();

    let $menu = document.querySelector("header.content > nav > ul");
    $menu.classList.toggle("activeMenu");
}