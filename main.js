// =============================================Parallax==============================================

function scrollFooter(scrollY, heightFooter) 
{
	console.log(scrollY);
	console.log(heightFooter);

	if(scrollY >= heightFooter)
	{
		$('footer').css({
			'bottom' : "0px"
		});
	} else {
		$('footer').css({
			'bottom' : '-' + heightFooter + 'px'
		});
	}
}

$(window).load(function(){
	var windowHeight = $(window).height(),
		 footerHeight = $('footer').height(),
		 heightDocument = (windowHeight) + ($('.content').height()) + ($('footer').height()) - 20;

	// установка элемента для анимации
	$('#scroll-animate, #scroll-animate-main').css({
		'height' : heightDocument + 'px'
	});

	// Для шапки
	$('header').css({
		'height' : windowHeight + 'px',
		'line-height' : windowHeight + 'px'
	});

	$('.wrapper-parallax').css({
		'margin-top' : windowHeight + 'px'
	});

	scrollFooter(window.scrollY, footerHeight);

	window.onscroll = function(){
		var scroll = window.scrollY;

		$('#scroll-animate-main').css({
			'top' : '-' + scroll + 'px'
		});

		$('header').css({
			'background-position-y' : 50 - (scroll * 100 / heightDocument) + '%'
		});

		scrollFooter(scroll, footerHeight);
	}
});


// ======================================Themes Switcher==============================================

let themeSwitch = document.querySelector('.lightTheme');
let themeTitle = document.querySelector('.themeTitle');

themeSwitch.onclick = function() {
	document.body.classList.toggle("dark-theme");
	if (themeTitle.textContent == "Dark") {
		themeTitle.textContent = "Light";
	} else {
		themeTitle.textContent = "Dark";
	};
	
	if(localStorage.getItem("theme") == "light") {
		localStorage.setItem("theme","dark");
		localStorage.setItem("themeTitle","Dark")
	} else {
		localStorage.setItem("theme","light");
		localStorage.setItem("themeTitle","Light")
	}
}

if(localStorage.getItem("theme") == "light") {
	themeSwitch.classList.remove("dark-btn-on");
	document.body.classList.remove("dark-theme");
	themeTitle.textContent = "Light";
} else if(localStorage.getItem("theme") == "dark") {
	themeSwitch.classList.add("dark-btn-on");
	document.body.classList.add("dark-theme");
	themeTitle.textContent = "Dark";
} else {
	localStorage.setItem("theme","light");
}
// ==================================================================================================
