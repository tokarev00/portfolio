const menuButton = document.querySelector('.menu-btn');
const menuList = document.querySelector('.header__list');
const menuItems = document.querySelectorAll('.header__item');


menuButton.addEventListener('click', even => {

    menuButton.classList.toggle('active');
    menuList.classList.toggle('active');
});

for(let menuItem of menuItems){
    menuItem.addEventListener('click', event =>{
        menuButton.classList.toggle('active');
        menuList.classList.remove('active');
    });
};