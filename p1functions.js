function reciever() {
	let string1 = document.getElementById("t1").value;
	let string2 = document.getElementById("t2").value;

	if (string1.length != string2.length) {
		window.alert("String lengths different.");
	}

	let stringLength = string1.length;

	let newString1 = "";
	let newString2 = "";

	for (let i = 0; i < stringLength; i++) {
		let a = string1.charAt(i);
		let b = string2.charAt(i);

		if (a == b) {
			newString1 = newString1 + a;
			newString2 = newString2 + b;
		}
		else {
			newString1 = newString1 + "<mark>" + a + "</mark>";
			newString2 = newString2 + "<mark>" + b + "</mark>";
		}			
	}

	console.log(newString1, newString2);

	document.getElementById("para").innerHTML += (newString1);
	document.getElementById("para").innerHTML += ("<br><br>");
	document.getElementById("para").innerHTML += (newString2);
}