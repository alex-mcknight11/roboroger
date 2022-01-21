// let beepInput = '1';
// let boopInput = '2';
// let neighborInput = '3';

window.onload = function () {
	let numberArray = [];

	function checkForMatch(number) {
		console.log(number);
		const numberArray = [];
		for (let i = 0; number >= i; i++) {
			const element = i.toString();
			if (element.includes('3')) {
				numberArray.push("Won't you be my neighbor?");
				console.log("Won't you be my neighbor?");
			} else if (element.includes('2')) {
				console.log('Boop!');
				numberArray.push('Boop!');
			} else if (element.includes('1')) {
				console.log('Beep!');
				numberArray.push('Beep!');
			} else {
				numberArray.push(element);
			}
		}
		return numberArray;
	}

	//UI LOGIC
	$(document).ready(function () {
		$('form').submit(function (event) {
			event.preventDefault();
			let numberSubmission = parseInt($('#inputField').val(), 10);
			console.log(checkForMatch(numberSubmission));
			$('#stringOutput').replaceWith(numberArray);
		});
	});
};
