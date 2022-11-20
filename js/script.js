// burger menu btn
const menu = document.querySelector('.menu')
const nav = document.querySelector('.nav')
const body = document.querySelector('body')
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
        body.classList.add('dim')
        nav.style.animation="menuOpen 0.6s ease-in-out forwards";
	} else {
        body.classList.remove('dim')
        nav.style.animation="menuClose 0.6s ease-in-out";
	}
})

  