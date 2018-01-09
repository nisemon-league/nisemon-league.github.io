var hasIVs = false;
var b0,b1,b2,b3,bKey;
var regExr = /.+(&#64;)*(.+(&#10;)){7,}.+/g;

$(document).ready(function(){
	$('[name="selectIV"]').on('blur',function(e){
		if($('[name="selectIV"]').val() == "True"){
			hasIVs = true;
		}
		else{
			hasIVs = false;
		}
	})
	$('[name="convert_btn"]').click(function(){
		var exprTrue;

		$('[name="selectIV"]').blur();
		var text = $('[name="set_copy"]').val();
		bKey = text.split('\n');

		if(hasIVs == false){
			b0 = bKey[0];
			for(i=1;i<=7;i++){
				b0 += "&#10;" + bKey[i];
			}
			for(i=0;i<=8;i++){
				bKey.shift();
			}
		}
		else{
			b0 = bKey[0];
			for(i=1;i<=8;i++){
				b0 += "&#10;" + bKey[i];
			}
			for(i=1;i<=9;i++){
				bKey.shift();
			}
			console.log(bKey);
		}

		b1 = b0.replace("@","&#64;");
		b2 = b1.replace(/\//g,"&#47;");

		exprTrue = regExr.test(b2);
		if(exprTrue==true){
			if(bKey.length == 0){
				console.log(b2);
				var dummy = document.createElement("textarea");
				document.body.appendChild(dummy);
				dummy.value = b2;

				dummy.select();
				document.execCommand("copy");
				document.body.removeChild(dummy);

				window.alert("Your set has been converted and copied to your clipboard.");
			}
			else{
				window.alert("Error: Incorrect set length. Does this set have IVs?");
			}
		}
		else{
			window.alert("Error: Set not formatted properly. Check conversion criterea.");
		}
	})
})