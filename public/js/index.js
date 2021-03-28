$(window).scroll(function(){
	var sct = $(this).scrollTop()
	if(sct > 200) $('aside.bt_top').addClass('active')
	else $('aside.bt_top').removeClass('active')
})

function topAni() {
	$('html, body').stop().animate({'scrollTop': 0}, 300)
}

$(".main_wrapper .pager_wrapper a").click(function(e){
	e.preventDefault();
	$(".main_wrapper .pager_wrapper a.pager").removeClass('active')
	$(this).addClass('active')
});

$(".main_wrapper .pager_wrapper .bt_play").click(function(e){
	e.preventDefault();
	$(".main_wrapper .pager_wrapper .bt_play").addClass('active')
	$(".main_wrapper .pager_wrapper .bt_pause").removeClass('active')
})

$(".main_wrapper .pager_wrapper .bt_pause").click(function(e){
	e.preventDefault();
	$(".main_wrapper .pager_wrapper .bt_play").removeClass('active')
	$(".main_wrapper .pager_wrapper .bt_pause").addClass('active')
})

// $(".best_wrapper .pager_wrapper a").click(function(e){
// 	e.preventDefault();
// 	$(".best_wrapper .pager_wrapper a.pager").removeClass('active')
// 	$(this).addClass('active')
// });

var swiperMain = new Swiper('.main_wrapper .swiper-container', {
	navigation: {
		nextEl: '.main_wrapper .bt_next',
		prevEl: '.main_wrapper .bt_prev',
	},
	pagination: {
		el: '.main_wrapper .swiper-pagination',
		clickable: true
	},

})

var swiper = new Swiper('.best_wrapper .swiper-container', {
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 0,
	loop: true,
	navigation: {
		nextEl: '.best_wrapper .bt_next',
		prevEl: '.best_wrapper .bt_prev',
	},
	pagination: {
		el: '.best_wrapper .swiper-pagination',
		clickable: true
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: 20,
		},
		1400: {
			slidesPerView: 4,
			slidesPerGroup: 4,
			spaceBetween: 20,
		},
	}
})