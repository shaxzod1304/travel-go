let burgerMenu = document.querySelector('.burger_meu');
let menu = document.querySelector ('.menu');

burgerMenu.addEventListener('click', function() {
    menu.classList.add('active');
})