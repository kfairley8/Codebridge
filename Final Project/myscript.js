/* FUN.HTML scripts */

function dist1() {
	var distTo = prompt("Enter a distance? (Without a comma)");

	if (distTo != "4957") {
		document.getElementById('d1').innerHTML =
		"You got the wrong number. Sad Face."; // if input wrong number, get this statement
	} else {
		document.getElementById('d1').innerHTML =
		"You looked it up. Haha.";		// if input correct number, get this statement
	}
}



