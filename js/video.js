var video;
var mute = false;
var current_volume;

window.addEventListener("load", function() {
    console.log("Good job opening the window");
    video = document.querySelector("#player1");
	video.autoplay = false //让视频不要自动播放
	video.loop = false;
	document.querySelector("#play").addEventListener("click", function() {
		video.play();
		console.log("Play Video");
		document.querySelector("#volume").textContent = Math.round(video.volume*100)+"%";//.textContent:被用来设置 #volume 元素的文本内容。//Math.round 函数则用于将计算结果四舍五入到最接近的整数。
	})
	document.querySelector("#pause").addEventListener("click", function() {
		video.pause();
	})

	document.querySelector("#slower").addEventListener("click", function() {
    	video.playbackRate *= 0.9; // 减慢视频速度
		console.log("Play rate - : ",video.playbackRate);
	})

	document.querySelector("#faster").addEventListener("click", function() {
    	video.playbackRate /= 0.9; // 加速视频
    	console.log("Play rate + : " + video.playbackRate);
	})

	document.querySelector("#skip").addEventListener("click", function() {
		if(video.currentTime + 10 > video.duration) {
			video.currentTime = 0;
			video.play();
		} 
		else {
			video.currentTime += 10;
			console.log("Current Time " + video.currentTime);
		}
	})

	document.querySelector("#mute").addEventListener("click", function() {
		if(video.muted) {
			video.muted = false;
			this.innerHTML = "Mute";
		} 
		else {
			video.muted = true;
			this.innerHTML = "Unmute";
		}
	})

	document.querySelector("#slider").addEventListener("input", function() {
		var newVolume = document.querySelector("#slider").value/100;
		video.volume = newVolume;
		current_volume = newVolume;
		document.querySelector("#volume").textContent = Math.round(newVolume*100)+"%";
	})

	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
	})

	this.document.querySelector("#orig").addEventListener("click", function(){
		video.classList.remove("oldSchool");
	})
});