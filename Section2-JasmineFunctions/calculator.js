function Calculator(){
	this.total = 0;

}

Calculator.prototype.add = function(number){
	return this.total += number;
}

Calculator.prototype.subtract = function(number){
	return this.total -= number;
}

Calculator.prototype.multiply = function(number){
	return this.total *= number;
}

Calculator.prototype.divide = function(number){
	if( number === 0 ){
		throw Error("Cannot divide by zero.")
	}
	return this.total /= number;
}

Object.defineProperty(Calculator.prototype, 'version', {
	get: function(){ 
		// return "0.1";//original version
		//3 steps deep of Promise returns to get the data
		return fetch("./version.json")
		.then( function(rsp){
			return rsp.json();
		})
		.then( function(json){
			console.log('fetch():rsp.json().then() got:', json );
			return json.version;
		})
		// .then( rsp => {
		// 	return rsp.json();
		// })
		// .then( json => {
		// 	console.log('fetch():rsp.json().then() got:', json );
		// 	return json.version;
		// })
	}
	,enumerable: true
	,configurable: true
});