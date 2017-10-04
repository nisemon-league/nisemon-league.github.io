function copyToClipboard(id) {
	var stratSet = document.getElementById(id).innerHTML;
	window.alert(stratSet);
	//window.clipboardData.setData("text/plain", strat);
	//var dummy = document.createElement("textarea");
	//dummy.innerHTML = strat;
	//dummy.select();
	//document.execCommand("copy");
	//document.body.removeChild(dummy);
}

function test(){
	window.alert("OK!");
}