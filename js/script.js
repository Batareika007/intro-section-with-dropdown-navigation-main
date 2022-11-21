// burger menu btn
const menu = document.querySelector('.menu')
const nav = document.querySelector('.nav')
const wrapper = document.querySelector('.wrapper')
const dropDowntitle = document.querySelectorAll('.dropdown-title')

// dropdown
dropDowntitle.forEach((link) => {
	link.addEventListener('click', function () {
        this.classList.toggle('open')
        this.nextElementSibling.classList.toggle('open')
	})
})

menu.addEventListener('click', function () {
	this.classList.toggle('menu_active')
	if (menu.classList.contains('menu_active')) {
        wrapper.classList.add('dim')
        nav.style.animation="menuOpen 0.5s ease-in-out forwards";
	} else {
        wrapper.classList.remove('dim')
        nav.style.animation="menuClose 0.5s ease-in-out";
	}
})

  