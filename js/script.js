$('.social__button').click(function () {
	$(this).toggleClass('open');
	$('.social__link').toggleClass('active');
});

$(document).click(function (event) {
	if (!$(event.target).closest('.social__button').length && !$(event.target).closest('.social__link').length) {
		$('.social__button').removeClass('open');
		$('.social__link').removeClass('active');
	}
});


$(document).ready(function () {

	$('input[type="tel"]').inputmask("+38 (099) 999-99-99");

	$('#form1').on('submit', function (e) { // обработчик событий на отправку формы 1
		e.preventDefault(); // предотвращение стандартного поведения формы

		// отправка формы 1 с помощью AJAX
		$.ajax({
			url: 'send-cons.php',
			type: 'POST',
			data: $(this).serialize(),
			success: function (data) {
				$('#form1')[0].reset(); // очистка формы 1
				// Открываем модальное окно благодарности после успешной отправки формы 1
				const thankPopup = document.getElementById('modal-thank');
				popupOpen(thankPopup);
			}
		});
	});

	$('#form2').on('submit', function (e) { // обработчик событий на отправку формы 2
		e.preventDefault(); // предотвращение стандартного поведения формы

		// отправка формы 2 с помощью AJAX
		$.ajax({
			url: 'send-cons.php',
			type: 'POST',
			data: $(this).serialize(),
			success: function (data) {
				$('#form2')[0].reset(); // очистка формы 2
				// Открываем модальное окно благодарности после успешной отправки формы 2
				const thankPopup = document.getElementById('modal-thank');
				popupOpen(thankPopup);
			}
		});
	});

	$('#form3').on('submit', function (e) { // обработчик событий на отправку формы 1
		e.preventDefault(); // предотвращение стандартного поведения формы

		// отправка формы 3 с помощью AJAX
		$.ajax({
			url: 'send-cons.php',
			type: 'POST',
			data: $(this).serialize(),
			success: function (data) {
				$('#form3')[0].reset(); // очистка формы 1
				// Открываем модальное окно благодарности после успешной отправки формы 1
				const thankPopup = document.getElementById('modal-thank');
				popupOpen(thankPopup);
			}
		});
	});

	$('#form4').on('submit', function (e) { // обработчик событий на отправку формы 1
		e.preventDefault(); // предотвращение стандартного поведения формы

		// отправка формы 4 с помощью AJAX
		$.ajax({
			url: 'send-vr.php',
			type: 'POST',
			data: $(this).serialize(),
			success: function (data) {
				$('#form4')[0].reset(); // очистка формы 1
				// Открываем модальное окно благодарности после успешной отправки формы 1
				const thankPopup = document.getElementById('modal-thank');
				popupOpen(thankPopup);
			}
		});
	});

	$('#form5').on('submit', function (e) { // обработчик событий на отправку формы 1
		e.preventDefault(); // предотвращение стандартного поведения формы

		// отправка формы 5 с помощью AJAX
		$.ajax({
			url: 'send-ar.php',
			type: 'POST',
			data: $(this).serialize(),
			success: function (data) {
				$('#form5')[0].reset(); // очистка формы 1
				// Открываем модальное окно благодарности после успешной отправки формы 1
				const thankPopup = document.getElementById('modal-thank');
				popupOpen(thankPopup);
			}
		});
	});

	$('#form6').on('submit', function (e) { // обработчик событий на отправку формы 1
		e.preventDefault(); // предотвращение стандартного поведения формы

		// отправка формы 1 с помощью AJAX
		$.ajax({
			url: 'send-3d.php',
			type: 'POST',
			data: $(this).serialize(),
			success: function (data) {
				$('#form6')[0].reset(); // очистка формы 1
				// Открываем модальное окно благодарности после успешной отправки формы 1
				const thankPopup = document.getElementById('modal-thank');
				popupOpen(thankPopup);
			}
		});
	});

	$('#form7').on('submit', function (e) { // обработчик событий на отправку формы 1
		e.preventDefault(); // предотвращение стандартного поведения формы

		// отправка формы 1 с помощью AJAX
		$.ajax({
			url: 'send-building.php',
			type: 'POST',
			data: $(this).serialize(),
			success: function (data) {
				$('#form7')[0].reset(); // очистка формы 1
				// Открываем модальное окно благодарности после успешной отправки формы 1
				const thankPopup = document.getElementById('modal-thank');
				popupOpen(thankPopup);
			}
		});
	});

	$('#form8').on('submit', function (e) { // обработчик событий на отправку формы 1
		e.preventDefault(); // предотвращение стандартного поведения формы

		// отправка формы 1 с помощью AJAX
		$.ajax({
			url: 'send-marketing.php',
			type: 'POST',
			data: $(this).serialize(),
			success: function (data) {
				$('#form8')[0].reset(); // очистка формы 1
				// Открываем модальное окно благодарности после успешной отправки формы 1
				const thankPopup = document.getElementById('modal-thank');
				popupOpen(thankPopup);
			}
		});
	});

	// закрытие модального окна при нажатии на кнопку закрытия

});



const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 300;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();

// ==============================================================================


$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.menu').toggleClass('open');
	});

	$('.menu__link').click(function (event) {
		$('.header__burger, .menu').removeClass('active');
		$('body').removeClass('lock');
	});

	// $(document).ready(function(){
	// 	$('.client__slider').slick({
	// 		arrows:true,
	// 		dots:false,
	// 		slidesToShow:1,
	// 		responsive: [
	// 			{
	// 				breakpoint: 860,
	// 				settings: {
	// 					arrows:false,
	// 					dots:true,
	// 				}
	// 			}
	// 		]
	// 	});
	// });

	
	$('.question__block--title').click(function (event) {
		if ($('.question__block').hasClass('one')) {
			$('.question__block--title').not($(this)).removeClass('active');
			$('.question__block--text').not($(this).next()).slideUp(300);

		}
		$(this).toggleClass('active').next().slideToggle(300);

	});
});

let myImageSlider = new Swiper('.client-image__swiper', {
	slidesPerView: 1,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	}
});

let myTextSlider = new Swiper('.client__swiper', {
	slidesPerView: 1,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
});

myImageSlider.controller.control = myTextSlider;
myTextSlider.controller.control = myImageSlider;


const scrollUp = () => {
	const scrollUp = document.getElementById('scroll-up')
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
		: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



// ============================================================================

