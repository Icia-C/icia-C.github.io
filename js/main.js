'use strict';
// Variables
var page = document.querySelector('.menu_page');
var openMenu = page.querySelector('.menu_open');
var closeMenu = page.querySelector('.close_button');

// Functions open-close menu navitation
function openNavMenu() {
	page.classList.add('page--menu-visible');
};

function closeNavMenu() {
	page.classList.remove('page--menu-visible');
};

openMenu.addEventListener('click', openNavMenu);
closeMenu.addEventListener('click', closeNavMenu);

//close menu click
var menuElement= document.querySelector('.menu');
menuElement.addEventListener('click', closeNavMenu);

// scroll Menú not working
document.querySelector('.menu_link').addEventListener('click', function(e){
	e.preventDefault();
	document.querySelector('.section_about').scrollIntoView({
		behavior: 'smooth',
		block:    'start',
	});
});
