(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
			// Resize the banner
			var window_width = $(window).width();
			if(window_width < 925) {
				$("#banner img").width('85%');
			}
			else {
				$("#banner img").width(786);
			}
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {
			$window.on('resize', function() { 
				$window.trigger('scroll');
			});

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

		$window.on('resize', function() { 
			var window_width = $(window).width();
			if(window_width < 925) {
				$("#banner img").width('85%');
			}
			else {
				$("#banner img").width(786);
			}
		});

	// Body
		var pageLinks = $('a h2');
		for(var i = 0; i < pageLinks.length; i++) {
			pageLinks[i].addEventListener("mouseover", function doAFlip() {
				this.style.transform = "translateX(20px)";
			});
			pageLinks[i].addEventListener("mouseout", function doAFlip() {
				this.style.transform = "translateX(0px)";
			});
		}
		var socialLinks = $('.icon.major');
		for(var i = 0; i < socialLinks.length; i++) {
			socialLinks[i].addEventListener("mouseover", function doAFlip() {
				this.style.transform = "rotate(-45deg) scale(1.3)";
			});
			socialLinks[i].addEventListener("mouseout", function doAFlip() {
				this.style.transform = "rotate(-45deg) scale(1)";
			});
		}
})(jQuery);