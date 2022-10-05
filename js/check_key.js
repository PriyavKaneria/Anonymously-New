$("#form").submit(function (e) {
	console.log("submit");
	let userAnswer = $("#answer").val();
	if (userAnswer == "") {
		alert("Enter a valid Cipher!");
		e.preventDefault();
	} else if (userAnswer == String.fromCharCode(947) + String.fromCharCode(957) + String.fromCharCode(974) + String.fromCharCode(963) + String.fromCharCode(951)) {
		alert("Umm...Close enough :o");
		e.preventDefault();
	}
	else {
		console.log("userAnswer: " + userAnswer + "going for api hit");
		let hash = getPasswordHash(userAnswer);
		hash.done(function (data) {
			console.log("hash: " + data.Digest);
			if (data.Digest != "a542e9b744bedcfd874129ab0f98c4ff") {
				// wrong answer
				$("#answer").val("");
				$("#answer").attr("placeholder", "Wrong answer");
				$("#answer").focus();
				alert("Inspection is the key");
				e.preventDefault();
			} else {
				// correct answer
				alert("Go0d job :thumbsup: 3asy enough!\nPu1l <up arrow> your sOcK8 4 de Next 1");
				console.log("Go0d job :thumbsup: 3asy enough!\nPu1l <up arrow> your sOcK8 4 de Next 1");
			}
		});
		console.log("else end");
		e.preventDefault();
	}
	console.log("submit end");
});

function getPasswordHash(userAnswer) {
	console.log("processing request");
	return $.ajax({
		url: "https://api.hashify.net/hash/md5/hex?value=" + userAnswer,
		type: "GET",
		dataType: "json",
	});
}