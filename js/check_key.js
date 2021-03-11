$("#form").submit(function(e){
	if ($("#answer").val()=="") {
		alert("Enter a valid Cipher!");
		e.preventDefault();
	}
	else if ($("#answer").val()==String.fromCharCode(947)+String.fromCharCode(957)+String.fromCharCode(974)+String.fromCharCode(963)+String.fromCharCode(951)) {
		alert("Umm...Close enough :o");
		e.preventDefault();
	}
	else if ($("#answer").val()!="knowledge") {
		alert("Inspection is the key");
		e.preventDefault();
	}
	alert("Go0d job :thumbsup: 3asy enough!\nPu1l <up arrow> your sOcK8 4 de Next 1");
});