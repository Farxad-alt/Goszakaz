
//BodyLock
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
//=================
let unlock = true;
//Menu
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		}
	});
};
function menu_close() {
	let iconMenu = document.querySelector(".icon-menu");
	let menuBody = document.querySelector(".menu__body");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
}
//=================
// Header
const headerElement = document.querySelector('.header');

const callback = function (entries, observer) {
	if (entries[0].isIntersecting) {
		headerElement.classList.remove('_scroll');
	} else {
		headerElement.classList.add('_scroll');
	}
};
//=================
// Погинация
const headerObserver = new IntersectionObserver(callback);
headerObserver.observe(headerElement);

window.onload = function () {
	let paginationPage = parseInt($('.cdp').attr('actpage'), 10);
	$('.cdp_i').on('click', function () {
		let go = $(this).attr('href').replace('#!', '');
		if (go === '+1') {
			paginationPage++;
		} else if (go === '-1') {
			paginationPage--;
		} else {
			paginationPage = parseInt(go, 10);
		}
		$('.cdp').attr('actpage', paginationPage);
	});
	//=================
	// показать ещё
	let box = document.getElementsByClassName('box');
	let btn = document.getElementById('button');
	for (let i = 2; i < box.length; i++) {
		box[i].style.display = "none";
	}

	let countD = 2;
	btn.addEventListener("click", function () {
		let box = document.getElementsByClassName('box');
		countD += 2;
		if (countD <= box.length) {
			for (let i = 0; i < countD; i++) {
				box[i].style.display = "block";
			}
		}

	})
};



