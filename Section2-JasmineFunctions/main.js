function calculate(inputValue){
	console.log('calculate/', inputValue );
	
	const expression = /[\+\-\/\*]/;
	const numbers	= inputValue.split(expression);//split based on the expr match

	const numA = +numbers[0];
	const numB = +numbers[1];
	const operation = inputValue.match(expression);//get the part of the string that matches the expression

	if( isNaN(numA) || isNaN(numB) || operation === null ){
		updateResult("Operation or input not recognized!");
		return;
	}

	console.log('calculate/', expression, numbers, operation );

	const c = new Calculator();
	let result;
	c.add( numA );

	switch (operation[0]) {
		case "+": result = c.add(numB); break;
		case "-": result = c.subtract(numB); break;
		case "*": result = c.multiply(numB); break;
		case "/": result = c.divide(numB); break;
		default:
			throw new Error(`Unknown operation`);
			break;
	}

	updateResult(result);

	// debugger;
}//calculate

function updateResult(result){
	console.log(`updateResult/`, result );
	const elem = document.getElementById("result");

	if( elem ){
		elem.innerText = result;
	}
}//updateResult/