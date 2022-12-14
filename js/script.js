document.addEventListener('DOMContentLoaded', () => {

    //menu
    const burger = document.querySelector('.header__burger')
    const menu = document.querySelector('.menu')
    const menuClose = document.querySelector('.menu__close')

    burger.addEventListener('click', () => {
        menu.classList.add('menu--active')
    })

    menuClose.addEventListener('click', () => [
        menu.classList.remove('menu--active')
    ])

})