/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Init Header
3. Init Menu
4. About Slider
5. Services Reel
6. Init Faq
7. Init Video


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	initHeader();
	initMenu();
	initAboutSlider();
	initServicesReel();
	initFaq();
	initVideo();

	document.addEventListener('DOMContentLoaded', initHeader);

	$(window).on('resize', function()
	{
		
	});

	$(document).on('scroll', function()
	{
		
	});

	$(document).on('load', function()
	{
		
	});

	/* 

	2. Init Header

	*/

	function initHeader()
	{
		const header = document.querySelector('.header');
		const sections = document.querySelectorAll('section');

		function updateScrolled()
		{
			if (window.scrollY > 90)
			{
				header.classList.add('scrolled');
			}
			else
			{
				header.classList.remove('scrolled');
			}
		}


		function updateHeaderTheme()
		{
			let currentSection = null;

			sections.forEach(section =>
			{
				const top = section.offsetTop;
				const height = section.offsetHeight;

				if (window.scrollY >= top && window.scrollY < top + height)
				{
					currentSection = section;
				}
			});

			if (currentSection)
			{
				if (currentSection.classList.contains('light-theme'))
				{
					header.classList.add('light');
					header.classList.remove('dark');
				}
				else if (currentSection.classList.contains('dark-theme'))
				{
					header.classList.add('dark');
					header.classList.remove('light');
				}
			}
		}

		// run once on load
		updateHeaderTheme();

		// run on scroll
		window.addEventListener('scroll', () =>
		{
			updateScrolled();
			updateHeaderTheme();
		});


		// optional: run on resize (keeps offsets accurate if viewport changes)
		window.addEventListener('resize', updateHeaderTheme);
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		const menu = document.querySelector(".menu");
		const body = document.querySelector("body");
		const btn = document.querySelector(".hamburger_container");
		const close = document.querySelector(".close");
		const items = document.querySelectorAll(".menu_nav ul li a");

		btn.addEventListener("click", function()
		{
			menu.classList.toggle("active");
			body.classList.toggle("no-scroll");
		});

		close.addEventListener("click", function()
		{
			menu.classList.toggle("active");
			body.classList.toggle("no-scroll");
		});

		items.forEach(function(item)
		{
			item.addEventListener("click", function()
			{
				menu.classList.toggle("active");
				body.classList.toggle("no-scroll");
			});
		});
	}

	/* 

	4. About Slider

	*/

	function initAboutSlider()
	{
		const slider = $('.about_slider');
		if(!slider) return;

		slider.owlCarousel(
		{
			items: 2,
			loop: true,
			margin: 24,
			autoplay: false,
			autoplayHoverPause: true,
			dots: false,
			nav: false,
			responsive:
			{
				0:
				{
					items: 1,
					margin: 16
				},
				576:
				{
					items: 1,
					margin: 16
				},
				768:
				{
					items: 2,
					margin: 16
				},
				769:
				{
					items: 2,
					margin: 24
				}
			}
		});
	}

	/* 

	5. Services Reel

	*/

	function initServicesReel()
	{
		const $wrapper = $(".services_video");
		const iframe = $wrapper.find('iframe')[0];
		const player = new Vimeo.Player(iframe);
		const overlay = $('.services_video_overlay');
		const btn = $('.services_reel_play_button');

		
		overlay.on('click', function()
		{
			player.getPaused().then(function(paused)
			{
				if(paused)
				{
					player.play();
					btn.toggleClass("hide");
				}
				else
				{
					player.pause();
					btn.toggleClass("hide");
				}
			});
		});

		// btn.on("click", () =>
		// {
		// 	if(video.paused)
		// 	{
		// 		video.classList.toggle("active");
		// 		video.play();
		// 	}
		// 	else
		// 	{
		// 		video.classList.toggle("active");
		// 		video.pause();
		// 	}
			
		// });

		// vid.on("click", () =>
		// {
		// 	if(video.paused)
		// 	{
		// 		video.classList.toggle("active");
		// 		video.play();
		// 	}
		// 	else
		// 	{
		// 		video.classList.toggle("active");
		// 		video.pause();
		// 	}
		// });
	}

	/* 

	6. Init Faq

	*/

	function initFaq()
	{
		if($('#faq_accordion'))
		{
			const acc = $('#faq_accordion');
			acc.accordionjs(
			{
				closeAble: true,
				slideSpeed  : 200,
				activeIndex: false
			});
		}
	}

	/* 

	7. Init Video

	*/

	function initVideo()
	{
		$('.about_slide').each(function()
		{
			const $wrapper = $(this);
			const iframe = $wrapper.find('iframe')[0];
			const player = new Vimeo.Player(iframe);

			$wrapper.on('mouseenter', function()
			{
				player.play().catch(function(error)
				{
					if (error.name === 'PlayInterrupted')
					{
						console.log("Hover play was interrupted.");
					}
				});
			});

			$wrapper.on('mouseleave', function()
			{
				player.pause();
			});
		});
	}

});