function copyToClipboard(id) {
	//Get the value to be copied
	var stratSet = document.getElementById(id).innerHTML;

	//Create an empty textarea, fill it with data to be copied
	var dummy = document.createElement("textarea");
	document.body.appendChild(dummy);
	dummy.value = stratSet;
	
	//Copy data and remove the buffer
	dummy.select();
	document.execCommand("copy");
	document.body.removeChild(dummy);

	window.alert("Set copied to clipboard!");
}