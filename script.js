function makeid(l) {
  // write your code here
	let num = parseInt(l);
	let result = '';
	let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for(let i = 0; i < num; i++){
		result += characters.charAt(Math.random() * characters.length);
	}
	return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");  2
alert(makeid(l));
