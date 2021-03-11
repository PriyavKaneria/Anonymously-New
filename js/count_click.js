var count=0;
var notme=0;
var randomise;
var timer;

function reset() {
	clearInterval(randomise);
	clearInterval(timer);
	// console.log('Done')
	randomise = window.setInterval(function(){
		for (var i = 1; i <= 9; i++) {
			document.getElementById("button"+i.toString()).innerHTML = text[Math.floor(Math.random() * text.length)];
			document.getElementById("button"+i.toString()).disabled=false;
		}
		// console.log('Working')
	}, 1000);

	timer = setInterval(function(){
		for (var i = 1; i <= 9; i++) {
			document.getElementById("button"+i.toString()).disabled=true;
		}
		$(".reloadDouble").css('display','inline-block');
		$(".click-me-keys").css('padding', '0% 10% 10% 10%;');
		clearInterval(randomise);
		clearInterval(timer);
		// console.log('Game Over');
	},20000);
	resettimer();
}

function resettimer(stop=false){
	var timerten = document.getElementById('secten');
	var timerone = document.getElementById('secone');
	if (!stop) {
		timerone.classList.add('notransition'); // Disable transitions
		timerone.offsetHeight; // Trigger a reflow, flushing the CSS changes
		timerone.classList.remove('notransition'); // Re-enable transitions
		timerten.classList.add('notransition'); // Disable transitions
		timerten.offsetHeight; // Trigger a reflow, flushing the CSS changes
		timerten.classList.remove('notransition'); // Re-enable transitions
	}else{
		timerone.style.webkitAnimationPlayState = "paused";
		timerten.style.webkitAnimationPlayState = "paused";
		console.log("Great! You've stopped the time :o\nNow click and cross the level...")
	}
}

function addcount(id) {
	var button = document.getElementById(id);
	if (button.innerHTML=="Click Me") {
		count++;
		button.disabled=true;
	}else if(button.innerHTML=="No Not Me"){
		notme++;
		count=0;
		reset();
		if(notme==3){
			$("#hint1").show();
		}
		if(notme==5){
			$("#hint2").show();
		}
		if(notme==7){
			$("#hint3").show();
		}
	}
	$("#counter").text(count);
	if (count==10) {
		clearInterval(randomise);
		clearInterval(timer);
		$(".click-me").css('transform', 'rotateY(180deg)').delay(250);
		$(".click-me").outerHeight();
		$(".front").hide();
		$(".back").show();
		$(".back").css('transform', 'rotateY(180deg)');
	}
}

function StopTimer(){
	clearInterval(timer);
	resettimer(stop=true);
}

function Extract(){
	var element = document.createElement('a');
	element.setAttribute('href', './imgs/access_granted_steg.jpg');
	element.setAttribute('download', 'access_granted_steg.jpg');
	element.setAttribute('target', '_blank');

	element.style.display = 'none';
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
}