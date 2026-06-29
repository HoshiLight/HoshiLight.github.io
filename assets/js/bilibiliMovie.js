// Youtube Iframe
var videoWidth = '100%';
var videoHeight = '100%';

var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

var ytNow = 0;
var ytSize = 'large';

//mediaQuery
const pcQuery = window.matchMedia('(min-width: 768px)');

function onYouTubeIframeAPIReady() {
	player = new YT.Player('fvideo_bg', {
		height: videoWidth,
		width: videoHeight,
		videoId:ytID[0],
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange,
			'onError':onPlayerError
		},
		playerVars: {
			rel:0,
			controls:0,
			disablekb:1,
			fs:0,
			iv_load_policy:3,
			showinfo:0,
			modestbranding:1,
			playsinline : 1,
		}
	});
}
function onPlayerReady(event) {
	event.target.mute();
	if(pcQuery.matches){
		event.target.playVideo();
	}
}
function onPlayerStateChange(event) {
	if(event.data == YT.PlayerState.ENDED){
		ytNow++;
		if(ytNow >= ytID.length){
			ytNow = 0;
		}
		if(ytNow < 0){
			ytNow = ytID.length - 1;
		}
		player.clearVideo();
		player.loadVideoById(ytID[ytNow],0,ytSize);
		player.playVideo();
	}
}
function stopVideo() {
	player.stopVideo();
}
function onPlayerError(event){
	console.log(event);
}

$(".js-movPlay").click(function(){
	setTimeout(function(){
		$('.js-youtubeIframe').attr('src','https://www.bilibili.com/blackboard/html5mobileplayer.html?aid=17784172&bvid=BV1nW411b7rT&cid=29495027&p=1&danmaku=0&high_quality=1&autoplay=1');
	},100);
	$('#youtubeModal').fadeIn(500);
	$('.modalBox').fadeIn(500);
	$('body').css({'overflow':'hidden'});
});



function ResizeYTPlayer(e){
	if(e.matches){
		player.playVideo();
	}else{
		stopVideo();
	}
}
pcQuery.addEventListener('change', ResizeYTPlayer); 