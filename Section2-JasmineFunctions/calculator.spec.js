describe("calculator.js", function(){
	
	it("should add() numbers to total", function(){
		const calc = new Calculator();
		calc.add(5);
		//we expect the total to be 5 now
		expect( calc.total ).toBe(5);
	});
	
	it("should subtract() numbers from the total", function(){
		const calc = new Calculator();
		calc.total = 20;
		calc.subtract( 10 );
		expect( calc.total ).toBe( 10 );
	}); 

	it("should multiply() the total by a number", function(){
		const calc = new Calculator();
		calc.total = 10;
		calc.multiply( 2 );
		expect( calc.total ).toBe( 20 );
	}); 

	it("should divide() the total by a number", function(){
		const calc = new Calculator();
		calc.total = 30;
		calc.divide( 2 );
		expect( calc.total ).toBe( 15 );
	}); 
	
	
	
});