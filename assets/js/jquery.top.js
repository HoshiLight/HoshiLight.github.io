/*-----------------------------------------------
** #firstview Responsive Setting **
-------------------------------------------------*/
function fvset(){
	var ww = window.innerWidth;
	var wh = window.innerHeight;
	var aspectratio = ww / wh;
	// console.log(ww,wh,aspectratio);
	if(aspectratio > 1.874){
		$("#fullWrap").removeClass('is-portrait');
		$("#fullWrap").addClass('is-vh');
	}else if(aspectratio < 1.1){
		$("#fullWrap").removeClass('is-vh');
		$("#fullWrap").addClass('is-portrait');
	}else{
		$("#fullWrap").removeClass('is-vh');
		$("#fullWrap").removeClass('is-portrait');
	}
	if(wh < 640 && aspectratio < 2.03){
		$("#fullWrap").removeClass('is-vh');
	}

	$(".js-witdhset").html(ww);
}
$(window).on('load resize',fvset);


/*-----------------------------------------------
** Eng Title InfiniteSlide **
-------------------------------------------------*/
$(function(){
	$('.titleSlides').infiniteslide({
		direction: 'right',
		pauseonhover: 'false',
		clone: 5,
		responsive: false
	});
});


/*-----------------------------------------------
** #tNews Slide (SP ONLY) **
-------------------------------------------------*/
$(function(){
	var swipertNews;
	$(window).on('load resize', function(){
		var ww = window.innerWidth;
		if(ww <= 768){
			if(swipertNews){
				return;
			}else{
				swipertNews = new Swiper('.js-swipertNews',{
					loop: true,
					navigation: {
						nextEl: ".swipertNews_arrow-next",
						prevEl: ".swipertNews_arrow-prev",
					},
				});
			}
		}else{
			if(swipertNews){
				swipertNews.destroy();
				swipertNews = undefined;
			}
		}
	})
});



/*-----------------------------------------------
** Character **
-------------------------------------------------*/
function character(_chara, _this){
	$(".js-character").removeClass('is-active');
	$(".js-characterThumb").removeClass('is-current');
	setTimeout(function(){
			$("#chara-"+ _chara).addClass('is-active');
			_this.addClass('is-current');
	},10);
}


/*-----------------------------------------------
 * NAV SCORLL
-------------------------------------------------*/
$(function(){
	var whh = window.innerHeight / 3;
	var scrT = '';
	var ww = window.innerWidth;
	$(window).on('load scroll resize',function(){
		$(".headerNavLists__item a").removeClass('is-active');
		$("#fullWrap").removeClass('is-firstview');
		scrT = $(window).scrollTop();
		whh = window.innerHeight / 2;
		o0 = $("#tNews").offset().top - whh;
		o1 = $("#introduction").offset().top - whh;
		o2 = $("#staffcast").offset().top - whh;
		// o3 = $("#character").offset().top - whh;
		o3 = $("#comics").offset().top - whh;
		o4 = $("#movie").offset().top - whh;
		if(o4 < scrT){
			$(".nav-Movie a").addClass('is-active');
		}else if(o3 < scrT){
			$(".nav-Comics a").addClass('is-active');
		}else if(o2 < scrT) {
			$(".nav-Staffcast a").addClass('is-active');
		}else if(o1 < scrT){
			$(".nav-Introduction a").addClass('is-active');
		}else if(o0 < scrT){
			$(".nav-News a").addClass('is-active');
		}else{
			$(".nav-Top a").addClass('is-active');
			if(ww > 767 && !($("#fullWrap").hasClass('is-portrait'))){
				$("#fullWrap").addClass('is-firstview');
				$('.js-menu').removeClass('is-active');
				$('.js-header').removeClass('is-active');
			}
		}
	});
})

/*-----------------------------------------------
 * Comment
-------------------------------------------------*/
function comment(_comment){
	$('#commentModal-' + _comment).fadeIn(500);
	$('.modalBox').fadeIn(500);
	$('body').css({'overflow':'hidden'});
}

/*-----------------------------------------------
 * LOADING
-------------------------------------------------*/
function Loading(){
	var hs = location.hash;
	// $(".kariLoading").delay(100).fadeOut(800);
	if(!hs){
		$("#firstview").addClass('l-aniset');
		setTimeout(function(){
			$(".Loading").addClass('l-ani');
			$(".Loading").delay(500).fadeOut(800);
			setTimeout(function(){
				$("#firstview").addClass('l-ani');
				$(".main").addClass('l-ani');
			},1000);
		},1200);
	}else{
		setTimeout(function(){
			$(".Loading").addClass('l-ani');
			$(".main").addClass('l-ani');
			$(".Loading").delay(500).fadeOut(800);
			$(".Loading").delay(500).fadeOut(800);
		},800);
		
	}
	   
}
$(window).on('load', Loading);

document.body.classList.add('l-ani');
 
/*-----------------------------------------------
 * Movie模态框 专
-------------------------------------------------*/
function movie(_movie){
	setTimeout(function(){
		
		$('.js-youtubeIframe').attr('src','https://www.bilibili.com/blackboard/html5mobileplayer.html?'+_movie+'&danmaku=0&high_quality=1&autoplay=1');
	},100);
	$('#youtubeModal').fadeIn(500);
	$('.modalBox').fadeIn(500);
	$('body').css({'overflow':'hidden'});
}
var movieTitleSwiper = new Swiper('.js-movieTitleSwiper', {
	effect: "fade",
	speed: 300,
	loop: true,
});
var movieSwiper = new Swiper('.js-movieSwiper', {
	slidesPerView: "auto",
	effect: "fade",
	speed: 300,
	loop: true,
	navigation: {
		nextEl: ".movieSwiper--next",
		prevEl: ".movieSwiper--prev",
	},
	pagination: {
		el: '.js-movieSwiperPager',
		clickable: true,
		renderBullet: function (index, className) {
			return '<button class="' + className + ' movieSwiper-pager"></button>';
		},
	},
	thumbs: {
		swiper: movieTitleSwiper,
	},
});