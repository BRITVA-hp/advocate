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

    //bar
    const barClose = document.querySelector('.bar__close')
    const bar = document.querySelector('.bar')
    const barOpen = document.querySelector('.bar__open')

    barClose.addEventListener('click', () => {
        bar.classList.remove('bar--active')
        barOpen.classList.add('bar__open--active')
    })

    barOpen.addEventListener('click', () => {
        bar.classList.add('bar--active')
        barOpen.classList.remove('bar__open--active')
    })

})