$ = jQuery;

$(document).ready(function(){
	var elem = document.querySelector('.grid');
	if(elem) {
		var msnry = new Masonry( elem, {
		  // options
		  itemSelector: '.grid-item',
		  columnWidth: 200
		});
	}

  $('.slider').slick({
    slidesToShow: 3,
    centerPadding: "10px",
    draggable: false,
    infinite: true,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    vertical: true,
    speed: 1000,
    autoplaySpeed: 2000,
    useTransform: true,
    adaptiveHeight: true,
  });
});

let $buttons = $('.js-toggle-responsive');
let $frame = $('.js-main-frame');
$buttons.on('click', function() {
	let $el = $(this);
	let device = $el.attr('data-device') //mobile sau tablet etc
	let newWidth = '100%';
	if (device === 'mobile') {
		newWidth = 480;
	}
	if (device === 'tablet') {
		newWidth = 768;
	}
	if (device === 'laptop') {
		newWidth = 1024;
	}
	$frame.css('width', newWidth);
});

