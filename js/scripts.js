let numbers = 'inputField';
let beepInput = '1';
let boopInput = '2';
let neighborInput = '3';
let numberArray = [];

function checkForMatch(numbers) {
	for (let i = 0; numberSubmission >= i; i++) {
		const element = i.toString();
		if (numbers.includes('1')) {
			numberArray.push('Beep!');
			console.log('Beep!');
		} else if (numbers.includes('2')) {
			console.log('Boop!');
			numberArray.push('Boop!');
		} else if (numbers.includes('3')) {
			console.log("Won't you be my neighbor?");
			numberArray.push("Won't you be my neighbor?");
		}
	}
}

//UI LOGIC
$(document).ready(function () {
	$('form').submit(function (event) {
		event.preventDefault();
		let numberSubmission = parseInt($('inputField').val(), 10);
	});
});
