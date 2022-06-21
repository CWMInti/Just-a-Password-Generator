document.getElementById("decreseLength").addEventListener('click', decreseLength);
document.getElementById("increaseLength").addEventListener('click', increaseLength);
document.getElementById("generatePassword").addEventListener('click', generatePassword);
document.getElementById("copyPassword").addEventListener('click', copyPassword);

function decreseLength() {
		var pLength = document.getElementById("passLength").innerHTML,
		finalLength = "";
		
		pLength--;
		finalLength += pLength;
		
		if (finalLength > 5) {
			document.getElementById("passLength").innerHTML = finalLength;
		} else if (finalLength <= 5) {
			document.getElementById("passLength").innerHTML = 6;
		}
}

function increaseLength() {
		var pLength = document.getElementById("passLength").innerHTML,
		finalLength = "";
		
		pLength++;
		finalLength += pLength;
		
		document.getElementById("passLength").innerHTML = finalLength;
}

function generatePassword() {
		var length = document.getElementById("passLength").innerHTML,
		charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&()?-+_",
		retVal = "";
			
		for (var i = 0, n = charset.length; i < length; ++i) {
			retVal += charset.charAt(Math.floor(Math.random() * n));
		}
		
		document.getElementById("password").value = retVal;
}

function copyPassword() {
	var copyText = document.getElementById("password");

	copyText.select();
	copyText.setSelectionRange(0, 99999);

	navigator.clipboard.writeText(copyText.value);
}