/* Menu Mobile Active */
const burger = document.querySelector('.burger img');
const nav = document.querySelector('nav');
const cross = document.querySelector('.cross img');


burger.addEventListener('click', function() {
    nav.classList.add('active')
})

cross.addEventListener('click', function() {
    nav.classList.remove('active')
})