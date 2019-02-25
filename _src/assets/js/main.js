'use strict';

const button = document.querySelector('.button');
const menu = document.querySelector('.list__navbar');

const showMenu = () => {
  menu.classList.toggle('hidden');
  menu.classList.toggle('menu');
};

button.addEventListener('click', showMenu);
