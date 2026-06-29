$(function(){

	// Anchor Smooth Scroll
	$('.js-anchor').on('click', function(){
		var speed = 1000;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'easeOutQuart');
		return false;
	});

	// Menu
	$('.js-menu').on('click', function(){
		$(this).toggleClass('is-active');
		if($(this).hasClass('is-active')){
			$('.js-header').addClass('is-active');
		} else {
			$('.js-header').removeClass('is-active');
		}
	});
	$('.headerNavLists__item a').on('click', function(){
		$('.js-menu').removeClass('is-active');
		$('.js-header').removeClass('is-active');
	});


	/**
	 * Modal open
	 */
	// Common
	$('.js-modalOpen').on('click', function(){
		var modalID = $(this).data('modal');
		$('#' + modalID).fadeIn(500);
		$('.modalBox').fadeIn(500);
		$('body').css({'overflow':'hidden'});
	});

	// Youtube
	$('.js-youtubePlay').on('click', function(){
		var ytID = $(this).data('ytid');
		var ytURL = 'https://www.youtube.com/embed/'+ytID+'?autoplay=1&rel=0';
		setTimeout(function(){
			$('.js-youtubeIframe').attr('src',ytURL);
		},100);
	});


	/**
	 * Modal close
	 * iframeのsrcをcloseの際に消す
	 */
	var $modalIF = $('.js-youtubeIframe');

	// Close処理
	function modalClose() {
		$('.modalBox, .oneModal').fadeOut(500);
		setTimeout(function(){
			$modalIF.attr('src','');
		},500);
		$('body').css({'overflow':''});
	}

	// Closeボタン
	$('.js-modalClose').on('click', function(){
		modalClose();
	});

	// Close エリア外
	$('.js-oneModalIn').on('click touchend', function(e) {
		if (!$(e.target).closest('.js-oneModalIn__cont').length) {
			modalClose();
		}
	});

	// アクセス時自動モーダル（hashがないときのみ）
	// var hs = location.hash;
	// if(!hs && $("#test")[0]){
	// 	$("#test").click();
	// }


});

/*-----------------------------------------------
** Random Circle -A/B/C- **
-------------------------------------------------*/
function randomCircle(id,circleType){
	//contentsHeight
	var ch = $(id).outerHeight(true);
	// console.log(ch);

	//Action ClassName or id
	var wrap = $(id);

	// circleList
	if(circleType == 'A'){
		var circleList = [
			'circle-a_1',
			'circle-a_2',
			'circle-a_3'
		];
	}else if(circleType == 'B'){
		var circleList = [
			'circle-b_1',
			'circle-b_2',
			'circle-b_3'
		];
	}else if(circleType == 'C'){
		var circleList = [
			'circle-c_1',
			'circle-c_2'
		];
	}else if(circleType == 'D'){
		var circleList = [
			'circle-a_1',
			'circle-a_2',
			'circle-a_3',
			'circle-b_1'
		];
	}

	//配列の数だけ繰り返し処理
	for( var i = 0; i < circleList.length; i++){

		//位置・大きさ配列設定
		var x = Math.floor(Math.random() * 85);
		var y = Math.floor(Math.random() * ch);
		if(circleType == 'C'){
			var scale = Math.floor(Math.random() * (150 - 60) + 50);
		}else{
			var scale = Math.floor(Math.random() * (200 - 60) + 50);
		}

		if(circleType == 'A'){
			//要素に要素を追加
			wrap.append('<div class="circleIn '+circleList[i]+'" style="top:'+y+'px; left:'+x+'%; transform:scale('+scale+'%);"><div class="js-scr"></div></div>');
		}else{
			//要素に要素を追加
			wrap.append('<div class="circleIn '+circleList[i]+'" style="bottom:'+y+'px; left:'+x+'%; transform:scale('+scale+'%);"><div class="js-scr"></div></div>');
		}
	}
}

// randomCircle('#js-circle_a','A');
randomCircle('#js-circle_b','B');
randomCircle('#js-circle_c','C');
randomCircle('#js-circle_sub','D');


/*-----------------------------------------------
** ScrollEvent (jQuery) **
-------------------------------------------------*/
function scr(){
	var ww = window.innerWidth;
	var wh = window.innerHeight;
	var scrT = $(window).scrollTop();
	$(".js-scr").each(function(){
		var posi = $(this).offset().top;
		if(scrT > posi - (wh/3 * 2) ){
			$(this).addClass('is-ani');
		}else{
			$(this).removeClass('is-ani');
		}
	});
}
$(window).on('load scroll resize', scr);



/*-----------------------------------------------
**  iPad OS check **
-------------------------------------------------*/
const ua = navigator.userAgent.toLowerCase()
// const r = document.getElementById('debug04')
if (/ipad|macintosh/.test(ua) && 'ontouchend' in document) {
	// r.textContent = 'AndroidまたはiOSまたはiPadOSです。'
	var addClass = document.querySelector('body');
	addClass.classList.add('is-ipadOS');
} else {
	// r.textContent = 'AndroidまたはiOSまたはiPadOSではありません！'
	// var addClass = document.querySelector('body');
	// addClass.classList.add('notipadOS');
}

/*-----------------------------------------------
**  Common Loading **
-------------------------------------------------*/
$(window).on('load', function(){
	$(".lding").delay(100).fadeOut(800);
});



/*-----------------------------------------------
**  Common MoviePlay **
-------------------------------------------------*/
function movie(_movie){
	setTimeout(function(){
		$('.js-youtubeIframe').attr('src','https://www.youtube.com/embed/'+_movie+'?autoplay=1&rel=0');
	},100);
	$('#youtubeModal').fadeIn(500);
	$('.modalBox').fadeIn(500);
	$('body').css({'overflow':'hidden'});
}