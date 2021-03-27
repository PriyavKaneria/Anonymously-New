// Get the modal
var modal = document.getElementById("click-me");
var modaloverlay = document.getElementById("overlay");

// Get the button that opens the modal
var btn = document.getElementById("submit");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var text = [
  "Click Me",
  "Me Me Me",
  "No Not Me"
];

// When the user clicks the button, open the modal 

btn.onclick = function() {
	if ($("#ans").val()==7) {
		alert('Thats Great! You have proved yourself...\nNow score 10 points for the next stage\nAll The Best!');
		modal.style.display = "block";
		modaloverlay.style.display = "block";
		reset();
	}else if($("#ans").val()==""){
		alert('Please Enter valid number!');
	}else{
		alert('Incorrect...!');
	}
}

$(".reloadDouble").click(function() {
	reset();
	$(".reloadDouble").hide();
});